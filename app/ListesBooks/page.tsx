"use client";

import Link from "next/link";
import BookCover from "@/app/components/BookCover";
import { useState } from "react";
import { FiArrowUpRight, FiBookmark, FiCheck, FiX } from "react-icons/fi";
import { useBooks } from "../context/BooksProvider";
import { sortBooks, type SortOrder } from "../catalog";

export default function ListedBooks() {
  const { readBooks, wishlist, setStatus } = useBooks();
  const [list, setList] = useState<"read" | "wishlist">("read");
  const [order, setOrder] = useState<SortOrder>("rating");
  const items = sortBooks(list === "read" ? readBooks : wishlist, order);

  return (
    <section className="shell interior">
      <div className="page-intro"><span className="eyebrow">YOUR LIBRARY</span><h1>My shelf</h1><p>Keep track of books you’ve read and books you want to read next.</p></div>
      <div className="catalog-tools">
        <div className="pills" aria-label="Shelf lists">
          <button type="button" className="pill" aria-pressed={list === "read"} onClick={() => setList("read")}>Read books · {readBooks.length}</button>
          <button type="button" className="pill" aria-pressed={list === "wishlist"} onClick={() => setList("wishlist")}>Wishlist · {wishlist.length}</button>
        </div>
        <label className="sort-field">Sort by <select value={order} onChange={(event) => setOrder(event.target.value as SortOrder)}><option value="rating">Highest rated</option><option value="pages">Most pages</option><option value="year">Newest</option></select></label>
      </div>
      {items.length ? <ul className="shelf-list">{items.map((book) => (
        <li key={book.bookId} className="shelf-row">
          <BookCover book={book} width={50} height={74} className="shelf-cover" decorative />
          <div className="shelf-copy"><h2><Link href={`/Books/${book.bookId}`}>{book.bookName} <FiArrowUpRight /></Link></h2><p>{book.author} · {book.totalPages} pages</p></div>
          <div className="shelf-actions">
            {list === "wishlist" && <button type="button" className="button secondary" onClick={() => { setStatus(book.bookId, "read"); setList("read"); }}><FiCheck /> Mark as read</button>}
            <button type="button" className="icon-button" onClick={() => setStatus(book.bookId)} aria-label={`Remove ${book.bookName} from ${list === "read" ? "read books" : "wishlist"}`}><FiX /></button>
          </div>
        </li>
      ))}</ul> : <div className="empty"><FiBookmark /><h2>{list === "read" ? "No books marked as read yet" : "Your wishlist is empty"}</h2><Link className="button primary" href="/Books">Explore books <FiArrowUpRight /></Link></div>}
    </section>
  );
}
