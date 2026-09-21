import React from 'react';
import {
  FaUsers,
  FaFileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { IBook } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const ReadListCard = ({ book }: BookCardProps) => {
    return (
        <div>
            



    <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg md:p-5">
      <div className="flex flex-col gap-5 sm:flex-row">

        {/* ================= BOOK IMAGE ================= */}
        <div className="relative flex h-56 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f3] sm:h-52 sm:w-52">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={400}
            className="h-44 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* ================= BOOK CONTENT ================= */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">

          {/* Title and Author */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              {book.bookName}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              By :{" "}
              <span className="font-medium text-gray-800">
                {book.author}
              </span>
            </p>
          </div>

          {/* Tags and Info */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">

            <span className="font-bold text-gray-800">
              Tag
            </span>

            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}

            {/* Year */}
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaMapMarkerAlt className="text-gray-500" />
              Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher and Pages */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">

            <span className="flex items-center gap-2">
              <FaUsers className="text-gray-500" />
              Publisher: {book.publisher}
            </span>

            <span className="flex items-center gap-2">
              <FaFileAlt className="text-gray-500" />
              Page {book.totalPages}
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Bottom Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Category */}
            <span className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500">
              Category: {book.category}
            </span>

            {/* Rating */}
            <span className="rounded-full bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-500">
              Rating: {book.rating.toFixed(1)}
            </span>

            {/* Details */}
            <Link
              href={`/Books/${book.bookId}`}
              className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default ReadListCard;