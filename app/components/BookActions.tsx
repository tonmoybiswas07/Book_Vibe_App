"use client";

import { FiBookmark, FiCheck, FiBookOpen } from "react-icons/fi";
import { useBooks } from "../context/BooksProvider";

export default function BookActions({ id }: { id: number }) {
  const { shelf, setStatus } = useBooks();
  const status = shelf[id];

  return (
    <div className="book-actions">
      <button type="button" className="button primary" aria-pressed={status === "read"} onClick={() => setStatus(id, status === "read" ? undefined : "read")}>
        {status === "read" ? <FiCheck /> : <FiBookOpen />} {status === "read" ? "Marked as read" : "Mark as read"}
      </button>
      <button type="button" className="button secondary" aria-pressed={status === "wishlist"} onClick={() => setStatus(id, status === "wishlist" ? undefined : "wishlist")}>
        <FiBookmark fill={status === "wishlist" ? "currentColor" : "none"} /> {status === "wishlist" ? "Saved to wishlist" : "Save to wishlist"}
      </button>
    </div>
  );
}
