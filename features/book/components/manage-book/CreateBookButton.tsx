'use client';

import { useState } from 'react';
import BookModal from '../modal/BookModal';
import BookForm from '../book-form/BookForm';

export default function CreateBookButton() {
  const [isCreate, setIsCreate] = useState(false);

  const handleClick = () => setIsCreate(true);

  return (
    <>
      <button type="button" className="rounded-md bg-[#43BFE5] p-2 text-white hover:bg-[#39A2C3]" onClick={handleClick}>
        Create
      </button>

      {isCreate && (
        <BookModal onClose={() => setIsCreate(false)} selector="#portal" title="Create Category">
          <BookForm onClose={() => setIsCreate(false)} mode="new" />
        </BookModal>
      )}
    </>
  );
}
