import { useState } from 'react';
import { Category } from '../../../services/@types/category';
import { patchUpdateCategory, postCreateCategory } from '../../../services/category';

interface CategoryData {
  id: number | null;
  name: string;
  desc: string;
  imageUrl: string;
  image: File | null;
  sort: number | null;
}

export default function useCategoryForm(category?: Category) {
  const [categoryData, setCategoryDate] = useState<CategoryData>({
    id: category?.id ?? null,
    name: category?.name ?? '',
    desc: category?.desc ?? '',
    imageUrl: category?.image ?? '',
    sort: category?.sort ?? null,
    image: null,
  });

  const handleChangeName = (name: string) => {
    setCategoryDate((prev) => ({ ...prev, name }));
  };

  const handleChangeDesc = (desc: string) => {
    setCategoryDate((prev) => ({ ...prev, desc }));
  };

  const handleChangeImage = (image: File) => {
    setCategoryDate((prev) => ({ ...prev, image }));
  };

  const handleChangeImageUrl = (imageUrl: string) => {
    setCategoryDate((prev) => ({ ...prev, imageUrl }));
  };

  const handleCreateCategory = async () => {
    const formData = new FormData();
    formData.append('name', categoryData.name);
    formData.append('desc', categoryData.desc);
    formData.append('image', categoryData.image as Blob);
    return postCreateCategory(formData);
  };

  const handleUpdateCategory = async () => {
    const formData = new FormData();
    formData.append('name', categoryData.name);
    formData.append('desc', categoryData.desc);
    formData.append('sort', categoryData.sort!.toString());

    if (categoryData.image) {
      formData.append('image', categoryData.image as Blob);
    }

    return patchUpdateCategory(categoryData.id!, formData);
  };

  return {
    categoryData,
    handleChangeName,
    handleChangeDesc,
    handleChangeImage,
    handleChangeImageUrl,
    handleCreateCategory,
    handleUpdateCategory,
  };
}
