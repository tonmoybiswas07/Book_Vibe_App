"use client";

import Image from "next/image";
import { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import type { IBook } from "../types";

export default function BookCover({ book, className = "book-cover", width = 200, height = 300, decorative = false, preload = false }: {
  book: Pick<IBook, "image" | "bookName" | "author">;
  className?: string;
  width?: number;
  height?: number;
  decorative?: boolean;
  preload?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`cover-fallback ${className}`} aria-hidden={decorative || undefined}>
        <FiBookOpen />
        <span>{book.bookName}</span>
        <small>{book.author}</small>
      </div>
    );
  }

  return <Image src={book.image} alt={decorative ? "" : `Cover of ${book.bookName}`} width={width} height={height} className={className} preload={preload} unoptimized onError={() => setFailed(true)} />;
}
