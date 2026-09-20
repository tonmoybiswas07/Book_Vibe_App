import React from "react";
import BookCard from "../BookCard/BookCard";
import { IBook } from "@/app/types";

const PromiseData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  const data = await res.json();
  return data;
};

const BooksPage = async () => {

  const dataPromise =await PromiseData();

  console.log(dataPromise);
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 text-center my-20">Our Books</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
        dataPromise.map((book: IBook) => <BookCard key={book.bookId} book={book} />)
      }
      </div>
    </div>
  );
};

export default BooksPage;
