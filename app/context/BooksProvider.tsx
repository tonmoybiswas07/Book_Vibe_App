"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";
import { books } from "../catalog";

type Status = "read" | "wishlist";
type Shelf = Record<string, Status>;

const storageKey = "book-vibe.shelf";
const empty = "{}";
let fallback = empty;
let storageUnavailable = false;
const listeners = new Set<() => void>();

function snapshot() {
  if (storageUnavailable) return fallback;
  try {
    return window.localStorage.getItem(storageKey) ?? empty;
  } catch {
    return fallback;
  }
}

function parseShelf(value: string): Shelf {
  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === "object") return parsed;
  } catch {
    // A malformed shelf starts empty.
  }
  return {};
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function setStatus(id: number, status?: Status) {
  const book = books.find((item) => item.bookId === id);
  const shelf = parseShelf(snapshot());
  const previous = shelf[id];
  if (!book || previous === status) return;

  if (status) shelf[id] = status;
  else delete shelf[id];
  fallback = JSON.stringify(shelf);
  try {
    window.localStorage.setItem(storageKey, fallback);
    storageUnavailable = false;
  } catch {
    storageUnavailable = true;
  }
  listeners.forEach((listener) => listener());

  if (status === "read") {
    toast.success(`Marked ${book.bookName} as read.`);
  } else if (status === "wishlist") {
    toast.success(`Saved ${book.bookName} to your wishlist.`);
  } else {
    toast.info(`Removed ${book.bookName} from your ${previous === "read" ? "read list" : "wishlist"}.`);
  }
}

const BooksContext = createContext<{ shelf: Shelf; setStatus: typeof setStatus } | null>(null);

export function useBooks() {
  const value = useContext(BooksContext);
  if (!value) throw new Error("useBooks requires BooksProvider");
  const { shelf } = value;
  return {
    ...value,
    readBooks: books.filter((book) => shelf[book.bookId] === "read"),
    wishlist: books.filter((book) => shelf[book.bookId] === "wishlist"),
  };
}

export default function BooksProvider({ children }: { children: ReactNode }) {
  const value = useSyncExternalStore(subscribe, snapshot, () => empty);
  return (
    <BooksContext.Provider value={{ shelf: parseShelf(value), setStatus }}>
      {children}
      <ToastContainer position="top-right" autoClose={3000} limit={3} role="status" />
    </BooksContext.Provider>
  );
}
