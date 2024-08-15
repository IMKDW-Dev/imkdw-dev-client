'use client';

import { FormEvent } from 'react';
import useBookForm from '../../hooks/use-book-form';
import BookFormTitle from './BookFormTitle';
import BookFormDesc from './BookFormDesc';
import BookFormSubmitButton from './BookFormSubmitButton';
import BookFormImage from './BookFormImage';
import { Book } from '../../../../services/@types/book';

interface Props {
  book?: Book;
  mode: 'new' | 'edit';
  onClose: () => void;
}

export default function BookForm({ book, mode, onClose }: Props) {
  const { bookData, handleChangeDesc, handleChangeImage, handleChangeImageUrl, handleChangeTitle } = useBookForm(book);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onClose();
  };

  return (
    <form className="flex flex-col items-center gap-6 p-4 pt-8" onSubmit={handleSubmit} encType="multipart/form-data">
      <BookFormImage
        changeImage={handleChangeImage}
        changeImageUrl={handleChangeImageUrl}
        imageUrl={bookData.imageUrl}
      />
      <BookFormTitle changeTitle={handleChangeTitle} title={bookData.title} />
      <BookFormDesc changeDesc={handleChangeDesc} desc={bookData.description} />
      <BookFormSubmitButton />
    </form>
  );
}
