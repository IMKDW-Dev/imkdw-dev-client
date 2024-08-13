import { Book } from '../@types/books/book.interface';
import BookItem from './book-item/BookItem';

export default function Books() {
  const books: Book[] = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    title: '이펙티브 타입스크립트',
    image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
    pages: 100,
    progress: index + 1,
    description:
      '타입스크립트의 동작 원리, 해야 할 것과 하지 말아야 할 것에 대한 구체적인 조언을 62가지 항목으로 나누어 담았다.',
    link: 'https://www.yes24.com/Product/Goods/102124327',
  }));

  return (
    <ul className="flex flex-wrap justify-between pt-6 mobile:p-4">
      {books.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
    </ul>
  );
}
