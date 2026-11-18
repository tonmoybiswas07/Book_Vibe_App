"use client";

import type { IBook } from "@/app/types";
import { useBooks } from "@/app/context/BooksProvider";
import BookCover from "@/app/components/BookCover";
import Link from "next/link";
import { FiArrowUpRight, FiBookmark, FiCheck, FiStar } from "react-icons/fi";

export default function BookCard({ book }: { book: IBook }) {
  const { shelf, setStatus } = useBooks();
  const status = shelf[book.bookId];

  return (
    <article className="book-card">
      <div className="cover-stage" data-tone={(book.bookId - 1) % 4}>
        <Link href={`/Books/${book.bookId}`} className="cover-link" aria-label={`View ${book.bookName}`}>
          <BookCover book={book} decorative />
        </Link>
        <button
          type="button"
          className="icon-button save-button"
          aria-label={status === "read" ? `${book.bookName} is marked read` : `${status ? "Remove" : "Save"} ${book.bookName} ${status ? "from" : "to"} wishlist`}
          aria-pressed={Boolean(status)}
          disabled={status === "read"}
          onClick={() => setStatus(book.bookId, status ? undefined : "wishlist")}
        >
          {status === "read" ? <FiCheck /> : <FiBookmark fill={status ? "currentColor" : "none"} />}
        </button>
      </div>
      <div className="card-copy">
        <div className="card-meta"><span>{book.category}</span><span className="rating"><FiStar /> {book.rating.toFixed(1)}</span></div>
        <h3><Link href={`/Books/${book.bookId}`}>{book.bookName}</Link></h3>
        <p>{book.author}</p>
        <div className="card-bottom"><span>{book.totalPages} pages</span><Link href={`/Books/${book.bookId}`} aria-label={`Read about ${book.bookName}`}><FiArrowUpRight /></Link></div>
      </div>
    </article>
  );
}
