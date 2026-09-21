"use client";

import { booksContext } from "@/app/context/BooksProvider";
import { IBook } from "@/app/types";
import { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";
import { toast } from "react-toastify";

const ReadBooksBtn = ({ book }: { book: IBook }) => {
  const context = useContext(booksContext);

  if (!context) {
    throw new Error("ReadBooksBtn must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    const alreadyRead = readBooks.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyRead) {
      toast.info(`${book.bookName} is already in your read books!`);
      return;
    }

    setReadBooks([...readBooks, book]);

    toast.success(
      `${book.bookName} has been added to your read books!`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );
  };

  return (
    <button
      onClick={handleReadBook}
      className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
    >
      <FaBookOpen />
      Read
    </button>
  );
};

export default ReadBooksBtn;