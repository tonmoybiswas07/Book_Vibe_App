"use client";

import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { IBook } from "@/app/types";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;

  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const booksContext = createContext<BooksContextType | undefined>(
  undefined
);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const shareData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <booksContext.Provider value={shareData}>
      {children}
    </booksContext.Provider>
  );
};

export default BooksProvider;