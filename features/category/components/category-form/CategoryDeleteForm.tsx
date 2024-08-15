'use client';

import { FormEvent } from 'react';
import { Category } from '../../../../services/@types/category';
import { deleteCategory } from '../../../../services/category';
import useCategory from '../../../../stores/use-category';

interface Props {
  category: Category;
  onClose: () => void;
}
export default function CategoryDeleteForm({ onClose, category }: Props) {
  const { setDeletedCategory } = useCategory((state) => state);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteCategory(category.id);
    onClose();
    setDeletedCategory(category);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3 p-6">
      <h3 className="text-2xl">Are you sure delet this Category?</h3>
      <p className="text-gray-400">If you delete the file, You can&apos;t recover it.</p>
      <div className="mt-5 flex justify-end gap-3">
        <button type="button" onClick={onClose} className="rounded-lg border border-gray-300 p-2 pl-4 pr-4">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-[#e64a19] p-2 pl-4 pr-4 text-white
          "
        >
          Delete
        </button>
      </div>
    </form>
  );
}
