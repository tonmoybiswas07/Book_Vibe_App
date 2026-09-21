import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            
<footer className="bg-gray-950 text-gray-300">
  <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">
          📚 Book Vibe
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Discover your next favorite book and build your personal reading
          collection with Book Vibe.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3">
          <li>
            <Link href="/" className="hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <a href="/books" className="hover:text-purple-400 transition">
              Books
            </a>
          </li>
          <li>
            <a href="/wishlist" className="hover:text-purple-400 transition">
              Wishlist
            </a>
          </li>
          <li>
            <a href="/read-books" className="hover:text-purple-400 transition">
              Read Books
            </a>
          </li>
        </ul>
      </div>

      {/* Explore */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">
          Explore
        </h3>

        <ul className="space-y-3">
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Popular Books
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              New Releases
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Best Sellers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Book Categories
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">
          Stay Connected
        </h3>

        <p className="text-gray-400 mb-4">
          Follow Book Vibe and never miss your next great read.
        </p>

        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
          >
            f
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
          >
            in
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
          >
            G
          </a>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="text-sm text-gray-500">
        © 2026 Book Vibe. All rights reserved.
      </p>

      <p className="text-sm text-gray-500">
        Made with ❤️ for book lovers
      </p>
    </div>
  </div>
</footer>


        </div>
    );
};

export default Footer;