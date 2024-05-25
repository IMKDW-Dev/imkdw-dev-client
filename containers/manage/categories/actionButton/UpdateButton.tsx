'use client';

import { Edit } from '@mui/icons-material';
import { useState } from 'react';

import { Category } from '../../../../services/@types/category';
import CategoryModal from '../../../../components/common/CategoryModal';
import CategoryUpdateForm from '../updateForm/CategoryUpdateForm';

interface Props {
  category: Category;
}
export default function ManageCategoryUpdateButton({ category }: Props) {
  const [isUpdate, setIsCreate] = useState(false);

  const handleClick = () => setIsCreate(true);

  return (
    <>
      <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        onClick={handleClick}
        aria-label="Edit Category"
      >
        <Edit />
      </button>
      {isUpdate && (
        <CategoryModal onClose={() => setIsCreate(false)} selector="#portal" title="Update Category">
          <CategoryUpdateForm onClose={() => setIsCreate(false)} category={category} />
        </CategoryModal>
      )}
    </>
  );
}
