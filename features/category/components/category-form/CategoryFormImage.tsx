import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  imageUrl: string;
  changeImage: (image: File) => void;
  changeImageUrl: (imageUrl: string) => void;
}

export default function CategoryFormImage({ changeImage, changeImageUrl, imageUrl }: Props) {
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    if (uploaderRef.current) {
      uploaderRef.current.click();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => changeImageUrl(reader.result as string);
      if (file) reader.readAsDataURL(file);
      changeImage(file);
    }
  };

  return (
    <>
      {imageUrl ? (
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
      <input type="file" hidden accept="image/*" ref={uploaderRef} onChange={handleUpload} />
    </>
  );
}
