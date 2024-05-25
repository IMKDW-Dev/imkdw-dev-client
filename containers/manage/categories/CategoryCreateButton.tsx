'use client';

import { useState } from 'react';
import CategoryCreateForm from './createForm/CategoryCreateForm';
import CategoryModal from '../../../components/common/modals/CategoryModal';

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
          <CategoryCreateForm onClose={() => setIsCreate(false)} />
        </CategoryModal>
      )}
    </>
  );
}
