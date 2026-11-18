"use client";

import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { FiArrowUpRight, FiBarChart2 } from "react-icons/fi";
import { useBooks } from "../context/BooksProvider";

export default function ReadingStats() {
  const { readBooks } = useBooks();
  const pages = readBooks.reduce((total, book) => total + book.totalPages, 0);
  const genres = new Set(readBooks.map((book) => book.category)).size;
  const data = readBooks.map((book) => ({ name: book.bookName, pages: book.totalPages }));

  return (
    <section className="shell interior">
      <div className="page-intro"><span className="eyebrow">YOUR READING</span><h1>Reading stats</h1><p>See what you’ve read and how the pages add up.</p></div>
      <dl className="stats-grid">
        <div><dt>Books read</dt><dd>{readBooks.length}</dd></div>
        <div><dt>Pages read</dt><dd>{pages.toLocaleString("en-US")}</dd></div>
        <div><dt>Genres explored</dt><dd>{genres}</dd></div>
      </dl>
      {data.length ? (
        <div className="chart-panel">
          <h2>Pages by book</h2>
          <BarChart responsive layout="vertical" style={{ width: "100%", height: Math.max(230, data.length * 48) }} data={data} accessibilityLayer margin={{ right: 16, bottom: 8 }}>
            <CartesianGrid horizontal={false} stroke="#e7ddd2" strokeDasharray="4 4" />
            <XAxis type="number" allowDecimals={false} tick={{ fill: "#62594f", fontSize: 12 }} />
            <YAxis type="category" dataKey="name" width="auto" tickFormatter={(name: string) => name.length > 18 ? `${name.slice(0, 17)}…` : name} tick={{ fill: "#62594f", fontSize: 11 }} />
            <Tooltip cursor={{ fill: "#f2e7db" }} />
            <Bar dataKey="pages" name="Pages" fill="#a64530" radius={[0, 6, 6, 0]} barSize={23} />
          </BarChart>
          <details><summary>View page counts as a list</summary><ul>{data.map((book) => <li key={book.name}>{book.name} · {book.pages} pages</li>)}</ul></details>
        </div>
      ) : <div className="empty"><FiBarChart2 /><h2>No reading stats yet</h2><p>Mark a book as read to start tracking your pages.</p><Link className="button primary" href="/Books">Explore books <FiArrowUpRight /></Link></div>}
    </section>
  );
}
