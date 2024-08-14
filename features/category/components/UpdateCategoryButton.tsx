'use client';

import { Edit } from '@mui/icons-material';
import { useState } from 'react';
import CategoryForm from './category-form/CategoryForm';
import CategoryModal from '../../../components/common/modals/CategoryModal';
import { Category } from '../../../services/@types/category';

interface Props {
  category: Category;
}
export default function UpdateCategoryButton({ category }: Props) {
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
          <CategoryForm onClose={() => setIsCreate(false)} category={category} mode="edit" />
        </CategoryModal>
      )}
    </>
  );
}
