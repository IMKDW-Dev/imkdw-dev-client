'use client';

import { FormEvent } from 'react';

import useCategoryForm from '../../hooks/use-category-form';
import { Category } from '../../../../services/@types/category';
import CategoryFormImage from './CategoryFormImage';
import CategoryFormDesc from './CategoryFormDesc';
import CategoryFormName from './CategoryFormName';
import CategoryFormSubmitButton from './CategoryFormSubmitButton';
import useCategory from '../../../../stores/use-category';

interface Props {
  category?: Category;
  mode: 'new' | 'edit';
  onClose: () => void;
}

export default function CategoryForm({ category, mode, onClose }: Props) {
  const { setNewCategory } = useCategory((state) => state);

  const {
    categoryData,
    handleChangeDesc,
    handleChangeName,
    handleChangeImage,
    handleChangeImageUrl,
    handleCreateCategory,
    handleUpdateCategory,
  } = useCategoryForm(category);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdCategory = await (mode === 'new' ? handleCreateCategory() : handleUpdateCategory());
    setNewCategory(createdCategory);
    onClose();
  };

  return (
    <form className="flex flex-col items-center gap-6 p-4 pt-8" onSubmit={handleSubmit} encType="multipart/form-data">
      <CategoryFormImage
        changeImage={handleChangeImage}
        changeImageUrl={handleChangeImageUrl}
        imageUrl={categoryData.imageUrl}
      />
      <CategoryFormName changeName={handleChangeName} name={categoryData.name} />
      <CategoryFormDesc changeDesc={handleChangeDesc} desc={categoryData.desc} />
      <CategoryFormSubmitButton />
    </form>
  );
}
