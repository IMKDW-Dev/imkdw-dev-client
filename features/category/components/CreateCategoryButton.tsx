'use client';

import { useState } from 'react';
import CategoryModal from '../../../components/common/modals/CategoryModal';
import CategoryForm from './category-form/CategoryForm';

export default function CategoryCreateButton() {
  const [isCreate, setIsCreate] = useState(false);

  const handleClick = () => setIsCreate(true);

  return (
    <>
      <button type="button" className="rounded-md bg-[#43BFE5] p-2 text-white hover:bg-[#39A2C3]" onClick={handleClick}>
        Create
      </button>

      {isCreate && (
        <CategoryModal onClose={() => setIsCreate(false)} selector="#portal" title="Create Category">
          <CategoryForm onClose={() => setIsCreate(false)} mode="new" />
        </CategoryModal>
      )}
    </>
  );
}
