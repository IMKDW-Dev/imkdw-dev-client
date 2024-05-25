'use client';

import { Edit } from '@mui/icons-material';
import { useState } from 'react';

import { Category } from '../../../../services/@types/category';
import Modal from '../../../../components/common/modals/CategoryModal';
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
        <Modal onClose={() => setIsCreate(false)} selector="#portal" title="Update Category">
          <CategoryUpdateForm onClose={() => setIsCreate(false)} category={category} />
        </Modal>
      )}
    </>
  );
}
