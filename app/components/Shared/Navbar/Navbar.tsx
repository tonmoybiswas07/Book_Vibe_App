"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBarChart2, FiBookOpen, FiBookmark } from "react-icons/fi";
import { useBooks } from "@/app/context/BooksProvider";

export default function Navbar() {
  const path = usePathname();
  const { readBooks, wishlist } = useBooks();
  const count = readBooks.length + wishlist.length;
  const browse = path === "/" || path.startsWith("/Books");

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/"><span className="brand-icon"><FiBookOpen /></span>Book Vibe<span className="brand-dot">.</span></Link>
        <nav aria-label="Main navigation">
          <Link className={browse ? "active" : ""} aria-current={browse ? "page" : undefined} href="/Books">Explore</Link>
          <Link className={path === "/readBooks" ? "active" : ""} aria-current={path === "/readBooks" ? "page" : undefined} href="/readBooks"><FiBarChart2 /> Reading stats</Link>
          <Link className="shelf-nav" aria-current={path === "/ListesBooks" ? "page" : undefined} href="/ListesBooks"><FiBookmark /> My shelf <span>{count}</span></Link>
        </nav>
      </div>
    </header>
  );
}
