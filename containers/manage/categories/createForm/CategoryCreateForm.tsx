'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { postCreateCategory } from '../../../../services/category';
import useCategory from '../../../../stores/use-category';
import useUser from '../../../../stores/use-user';
import { userRole } from '../../../../constants/user.constant';
import clsx from 'clsx';

interface Props {
  onClose: () => void;
}
export default function CategoryCreateForm({ onClose }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const { setNewCategory } = useCategory((state) => state);
  const uploaderRef = useRef<HTMLInputElement>(null);
  const { userInfo } = useUser((state) => state);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', description);
    formData.append('image', image as Blob);

    const createdCategory = await postCreateCategory(formData);
    onClose();
    setNewCategory(createdCategory);
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
        {image && imageUrl ? (
          <div className="profile relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[100px] border border-gray-300">
            <Image src={imageUrl} alt="upload" width={80} height={80} />
          </div>
        ) : (
          <button
            className="profile relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center overflow-hidden rounded-[100px] border border-gray-300"
            onClick={handleClickUpload}
            type="button"
          >
            <Image src="/images/icon/upload.svg" alt="upload" width={25} height={25} />
          </button>
        )}
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
        <button
          type="submit"
          className={clsx(
            'w-1/3 rounded-md p-2 text-white',
            userInfo.role === userRole.NORMAL ? 'bg-gray-300' : 'bg-[#6658DD] hover:bg-[#573BBC]',
          )}
          disabled={userInfo.role === userRole.NORMAL}
        >
          Create
        </button>
      </form>
      <input type="file" hidden accept="image/*" ref={uploaderRef} onChange={handleUpload} />
    </>
  );
}
