"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { books, sortBooks, type SortOrder } from "../catalog";
import BookCard from "./Shared/BookCard/BookCard";

const categories = ["All books", ...new Set(books.map((book) => book.category))];

export default function Catalog({ standalone = false }: { standalone?: boolean }) {
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOrder>("catalog");
  const term = query.trim().toLowerCase();
  const matches = sortBooks(books.filter((book) =>
    (category === categories[0] || book.category === category) &&
    [book.bookName, book.author, book.category, ...book.tags].some((value) => value.toLowerCase().includes(term))
  ), sort);
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="catalog" className="shell catalog">
      <div className="section-heading">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <Heading>Explore the catalog</Heading>
        </div>
        <label className="search-field"><FiSearch aria-hidden /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search books or authors" aria-label="Search books or authors" /></label>
      </div>
      <div className="catalog-tools">
        <div className="pills" aria-label="Filter by genre">
          {categories.map((item) => <button type="button" key={item} className="pill" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="sort-field">Sort by <select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}><option value="catalog">Featured</option><option value="rating">Highest rated</option><option value="pages">Most pages</option><option value="year">Newest</option></select></label>
      </div>
      <p className="result-count" role="status">{matches.length} {matches.length === 1 ? "book" : "books"}</p>
      {matches.length ? <div className="book-grid">{matches.map((book) => <BookCard key={book.bookId} book={book} />)}</div> :
        <div className="empty"><FiSearch /><h2>No books found</h2><button className="button secondary" onClick={() => { setQuery(""); setCategory(categories[0]); }}>Clear filters</button></div>}
    </section>
  );
}
