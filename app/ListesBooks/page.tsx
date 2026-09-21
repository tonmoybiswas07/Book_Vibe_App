"use client";

import React, { useContext, useState } from "react";

import { booksContext } from "../context/BooksProvider";
import ReadListCard from "../components/ReadListCard/ReadListCard";
import { IBook } from "../types";


const ListedBooks = () => {
  const context = useContext(booksContext);
  const [sortOption, setSortOption] = useState<"rating" | "pages" | "year">("rating");

  if (!context) {
    throw new Error(
      "ListedBooks must be used inside BooksProvider"
    );
  }

  const { readBooks, wishlist } = context;
  const sortBooks = (books: IBook[], option: "rating" | "pages" | "year") => {
    return [...books].sort((a, b) => {
      if (option === "rating") {
        return b.rating - a.rating;
      }
      if (option === "pages") {
        return b.totalPages - a.totalPages;
      }
      if (option === "year") {
        return b.yearOfPublishing - a.yearOfPublishing;
      }
      return 0;
    });
  };

  const shortedReadBooks = sortBooks(readBooks, sortOption);
  const shortedWishlistBooks = sortBooks(wishlist, sortOption);
 

  return (
    <div className="container mx-auto">

      {/* Header */}
      <div className="mt-20 mb-4 flex items-center justify-center rounded-lg bg-gray-300 p-10">
        <h1 className="text-4xl font-bold">
          Books
        </h1>
      </div>

      <div className="my-8 flex justify-center">
  <div className="relative">
    <select
      defaultValue={sortOption}
      onChange={(e) =>
        setSortOption(
          e.target.value as "rating" | "pages" | "year"
        )
      }
      className="
        select
        select-success
        w-64
        rounded-xl
        border-gray-200
        bg-white
        px-4
        font-medium
        text-gray-700
        shadow-sm
        outline-none
        transition-all
        duration-300
        hover:border-green-400
        hover:shadow-md
        focus:border-green-500
        focus:outline-none
        focus:ring-2
        focus:ring-green-100
      "
    >
      <option disabled value="">
        Sort by...
      </option>

      <option value="rating">
        ⭐ Rating
      </option>

      <option value="pages">
        📖 Number of Pages
      </option>

      <option value="year">
        📅 Publisher Year
      </option>
    </select>
  </div>
</div>

      {/* Tabs */}
      <div>
        <div className="tabs tabs-lift">

          {/* ================= READ BOOKS ================= */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`(${readBooks.length}) Read Books`}
            defaultChecked
          />

          <div className="tab-content border-base-300 bg-base-100 p-6">

            { shortedReadBooks.length > 0 ? (
              <div className="space-y-5">
                {shortedReadBooks.map((book) => (
                  <ReadListCard
                    key={book.bookId}
                    book={book}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-xl font-bold">
                No read books to display.
              </p>
            )}

          </div>

          {/* ================= WISHLIST ================= */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`(${wishlist.length}) Wishlist`}
          />

          <div className="tab-content border-base-300 bg-base-100 p-6">

            {shortedWishlistBooks.length > 0 ? (
              <div className="space-y-5">
                {shortedWishlistBooks.map((book) => (
                  <ReadListCard
                    key={book.bookId}
                    book={book}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-xl font-bold">
                No wishlist books to display.
              </p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ListedBooks;