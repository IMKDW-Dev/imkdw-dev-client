'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import useUser from '../../../stores/use-user';
import { patchUpdateUserInfo } from '../../../services/user';
import { PatchUpdateUserInfoBody } from '../../../services/@types/user';

interface Props {
  onClose: () => void;
}
export default function ChageUserInfoForm({ onClose }: Props) {
  const { userInfo, setUserInfo } = useUser((state) => state);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [imageUrl, setImageUrl] = useState<string>(userInfo.profile);
  const [image, setImage] = useState<File | null>(null);

  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateBody: PatchUpdateUserInfoBody = {};
    if (image) {
      updateBody.profileImage = image;
    }

    if (nickname !== userInfo.nickname) {
      updateBody.nickname = nickname;
    }

    const response = await patchUpdateUserInfo(userInfo.id, updateBody);
    setUserInfo({ ...userInfo, nickname: response.nickname, profile: response.profile });
    onClose();
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
          <Image src={imageUrl} alt="upload" fill className="object-cover" />
        </button>
        <div className="flex w-full flex-col gap-2">
          <p className="text-[14px] text-[#6C757D]">Nickname</p>
          <input
            type="text"
            value={nickname}
            onChange={handleChangeNickname}
            className="rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
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
