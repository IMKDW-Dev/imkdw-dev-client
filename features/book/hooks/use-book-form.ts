import { useState } from 'react';
import { Book } from '../../../services/@types/book';

interface BookData {
  id: string | null;
  title: string;
  description: string;
  image: File | null;
  imageUrl: string;
}

export default function useBookForm(book?: Book) {
  const [bookData, setBookData] = useState<BookData>({
    id: book?.id ?? null,
    title: book?.title ?? '',
    description: book?.description ?? '',
    image: null,
    imageUrl: book?.image ?? '',
  });

  const handleChangeTitle = (title: string) => {
    setBookData((prev) => ({ ...prev, title }));
  };

  const handleChangeDesc = (description: string) => {
    setBookData((prev) => ({ ...prev, description }));
  };

  const handleChangeImage = (image: File) => {
    setBookData((prev) => ({ ...prev, image }));
  };

  const handleChangeImageUrl = (imageUrl: string) => {
    setBookData((prev) => ({ ...prev, imageUrl }));
  };

  return {
    bookData,
    handleChangeTitle,
    handleChangeDesc,
    handleChangeImage,
    handleChangeImageUrl,
  };
}
