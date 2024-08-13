import Link from 'next/link';
import { LinearProgress } from '@mui/material';

import BookItemImage from './BookItemImage';
import { Book } from '../../@types/books/book.interface';

interface Props {
  book: Book;
}

export default function BookItem({ book }: Props) {
  return (
    <li className="box-shadow mt-5 flex h-[600px] w-[31%] rounded-lg border border-gray-300 bg-white hover:shadow-2xl">
      <Link href={`/study/books/${book.id}`} className="flex w-full flex-col">
        <BookItemImage image={book.image} title={book.title} />
        <div className="flex flex-col gap-2 p-3">
          <h3 className="text-2xl font-bold">{book.title}</h3>
          <p className="line-clamp-2 text-gray-500">{book.description}</p>
          <div className="mt-2 flex flex-col gap-1">
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
      </Link>
    </li>
  );
}
