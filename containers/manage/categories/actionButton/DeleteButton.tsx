'use client';

import { useState } from 'react';
import Delete from '@mui/icons-material/Delete';

import { Category } from '../../../../services/@types/category';
import Confirm from '../../../../components/common/Confirm';
import CategoryDeleteForm from '../deleteForm/CategoryDeleteForm';

interface Props {
  category: Category;
}
export default function ManageCategoryDeleteButton({ category }: Props) {
  const [isDelete, setIsDelete] = useState(false);

  const handleClick = () => {
    setIsDelete(true);
  };

  const closeHandler = () => {
    setIsDelete(false);
  };

  return (
    <>
      <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        onClick={handleClick}
        aria-label="Delete Category"
        disabled={category.articleCount > 0}
      >
        <Delete />
      </button>
      {isDelete && (
        <Confirm onClose={closeHandler}>
          <CategoryDeleteForm onClose={closeHandler} category={category} />
        </Confirm>
      )}
    </>
  );
}
