import { IBook } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f5]">
        <Image
          src={book.image}
          alt={book.bookName}
          width={600}
          height={800}
          className="h-52 w-36 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-md">
          <FaStar className="text-yellow-400" />
          <span>{book.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {book.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="mt-4 line-clamp-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-2 text-sm text-gray-500">
        By{" "}
        <span className="font-medium text-gray-700">
          {book.author}
        </span>
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-dashed border-gray-300" />

      {/* Bottom Info */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Category
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-700">
            {book.category}
          </p>
        </div>

        {/* Pages */}
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Pages
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-700">
            {book.totalPages}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400">
          Published {book.yearOfPublishing}
        </span>

        <Link href={`/Books/${book.bookId}`}>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-green-600">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;