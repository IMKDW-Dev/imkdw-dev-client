'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { patchUpdateCategory } from '../../../../services/category';
import useCategory from '../../../../stores/use-category';
import { Category } from '../../../../services/@types/category';

interface Props {
  onClose: () => void;
  category: Category;
}
export default function CategoryUpdateForm({ onClose, category }: Props) {
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.desc);
  const [imageUrl, setImageUrl] = useState<string>(category.image);
  const [image, setImage] = useState<File | null>(null);

  const { setUpdatedCategory } = useCategory((state) => state);
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', description);
    if (image) {
      formData.append('image', image);
    }

    const updatedCategory = await patchUpdateCategory(category.id, formData);
    onClose();
    setUpdatedCategory(updatedCategory);
  };

  const handleClickUpload = () => {
    if (uploaderRef.current) {
      uploaderRef.current.click();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result as string);
      if (file) reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <>
      <form className="flex flex-col items-center gap-6 p-4 pt-8" onSubmit={handleSubmit} encType="multipart/form-data">
        <button
          className="profile relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center overflow-hidden rounded-[100px] border border-gray-300"
          onClick={handleClickUpload}
          type="button"
        >
          <Image src={imageUrl} alt="upload" width={80} height={80} />
        </button>
        <div className="flex w-full flex-col gap-3">
          <p className="text-[14px] text-[#6C757D]">Name</p>
          <input
            type="text"
            placeholder="Backend"
            value={name}
            onChange={handleChangeName}
            className="rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-[14px] text-[#6C757D]">Description</p>
          <textarea
            value={description}
            onChange={handleChangeDescription}
            className="resize-none rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
            placeholder="Don't stop using node.js"
          />
        </div>
        <button type="submit" className="w-1/3 rounded-md bg-[#6658DD] p-2 text-white hover:bg-[#573BBC]">
          Save
        </button>
      </form>
      <input type="file" hidden accept="image/*" ref={uploaderRef} onChange={handleUpload} />
    </>
  );
}
