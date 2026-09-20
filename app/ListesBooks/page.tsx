
"use client";
import React, { useContext } from 'react';
import { booksContext } from '../context/BooksProvider';

const ListedBooks = () => {
    const {readBooks} = useContext(booksContext);
    console.log(readBooks)
    return (
        <div>
            Listed books{readBooks.length}
        </div>
    );
};

export default ListedBooks;