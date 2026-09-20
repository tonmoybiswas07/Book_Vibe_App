"use client";

import { booksContext } from '@/app/context/BooksProvider';
import { IBook } from '@/app/types';
import { use, useContext } from 'react';
import { FaBookOpen } from 'react-icons/fa';

const ReadBooksBtn = ({book}: {book: IBook}) => {
    const {readBooks, setReadBooks} = useContext(booksContext);

    const handleReadBook = () => {
        // Logic to handle the "Read" button click
        setReadBooks([...readBooks, book]);
    }
    return (
        <div>
            <button onClick={handleReadBook} className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white">
                  <FaBookOpen />
                  Read
                </button>
        </div>
    );
};

export default ReadBooksBtn;