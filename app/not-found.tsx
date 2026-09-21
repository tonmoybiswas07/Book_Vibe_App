import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6">
  <div className="max-w-lg w-full text-center">
    
    <div className="text-8xl mb-6">
      📚
    </div>

    <p className="text-purple-600 font-semibold text-lg mb-2">
      BOOK VIBE
    </p>

    <h1 className="text-5xl font-bold text-gray-900 mb-4">
      Oops! Something went wrong
    </h1>

    <p className="text-gray-500 text-lg leading-relaxed mb-8">
      Looks like this page took a little detour.
      <br />
      Let's get you back to your favorite books.
    </p>

    <div className="flex justify-center gap-4">
      <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
        Try Again
      </button>

      <Link href={"/"}>
      <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
        Back to Home
      </button>
      </Link>
    </div>

  </div>
</div>


        </div>
    );
};

export default ErrorPage;