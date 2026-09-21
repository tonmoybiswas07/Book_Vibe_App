"use client";

import { booksContext } from "@/app/context/BooksProvider";
import { IBook } from "@/app/types";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const WishListBtn = ({ book }: { book: IBook }) => {
  const context = useContext(booksContext);

  if (!context) {
    throw new Error("WishListBtn must be used inside BooksProvider");
  }

  const { wishlist, setWishlist } = context;

  const handleWishlistBtn = () => {
    const alreadyExists = wishlist.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyExists) {
      toast.info(`${book.bookName} is already in your wishlist!`);
      return;
    }

    setWishlist([...wishlist, book]);

    toast.success(`${book.bookName} has been added to your wishlist!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <button
      onClick={handleWishlistBtn}
      className="flex items-center gap-2 rounded-xl bg-[#4db3ce] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#319bb8]"
    >
      <FaHeart />
      Wishlist
    </button>
  );
};

export default WishListBtn;