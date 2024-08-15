'use client';

import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';

import ManageBookImage from './ManageBookImage';
import { Book } from '../../../../services/@types/book';
import { getBooks } from '../../../../services/book';

export default function ManageBook() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.items);
    };

    fetchBooks();
  }, []);

  return (
    <section>
      <ul className="flex flex-wrap justify-between">
        {books.map((book) => (
          <li className="flex h-[300px] w-[48%] gap-4 rounded-lg border border-gray-300 shadow-lg [&:nth-child(n+3)]:mt-6">
            <ManageBookImage image={book.image} name={book.title} />
            <div className="flex w-1/2 flex-col gap-2 py-4 pl-2">
              <h3 className="line-clamp-2 text-2xl font-bold">{book.title}</h3>
              <p className="line-clamp-5 text-lg">{book.description}</p>
              <div className="mt-4 flex flex-col gap-1">
                <p className="text-sm">총 {book.pages}페이지</p>
                <LinearProgress
                  variant="determinate"
                  value={book.progress}
                  color="primary"
                  className="h-3 rounded-l-lg rounded-r-lg"
                />
                <p className="w-full text-right text-blue-600">{book.progress}% 완료</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
