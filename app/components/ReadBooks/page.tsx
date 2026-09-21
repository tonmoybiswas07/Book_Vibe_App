"use client";

import { IBook } from "@/app/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";


interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const booksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  return (
    <booksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </booksContext.Provider>
  );
};

export default BooksProvider;