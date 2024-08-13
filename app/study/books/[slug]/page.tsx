import { Book } from '../../../../features/study/components/@types/books/book.interface';
import BookContents from '../../../../features/study/components/books/book-detail/BookContents';
import BookDetailImage from '../../../../features/study/components/books/book-detail/BookDetailImage';

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book: Book = {
    id: +params.slug,
    title: `Book of ${params.slug}`,
    image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
    pages: 100,
    progress: 50,
    description:
      '타입스크립트의 동작 원리, 해야 할 것과 하지 말아야 할 것에 대한 구체적인 조언을 62가지 항목으로 나누어 담았다.',
    link: 'https://www.yes24.com/Product/Goods/102124327',
  };

  return (
    <section className="flex flex-col items-center justify-between gap-6 px-10 pt-[50px]">
      <BookDetailImage image={book.image} title={book.title} />
      <h1 className="w-full text-center text-4xl">{book.title}</h1>
      <p className="text-xl text-gray-500">{book.description}</p>
      <BookContents />
    </section>
  );
}
