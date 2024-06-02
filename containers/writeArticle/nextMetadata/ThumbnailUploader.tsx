import Image from 'next/image';
import { useRef } from 'react';
import useCreateArticle from '../../../stores/use-create-article';

export default function ArticleThumbnailUploader() {
  const { data, setThumbnail, setThumbnailUrl } = useCreateArticle((state) => state);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setThumbnailUrl(reader.result as string);
      if (file) reader.readAsDataURL(file);
      setThumbnail(file);
    }
  };

  return (
    <section className="w-1/2 border-r border-gray-300 pr-5">
      <div className="flex h-full w-full flex-col gap-3">
        <h3 className="text-xl">Thumbnail</h3>
        <button
          type="button"
          className="relative flex h-full w-full items-center justify-center rounded-md border border-gray-300 bg-gray-200"
          onClick={handleClickUpload}
        >
          {data.thumbnailUrl ? (
            <Image
              src={data.thumbnailUrl}
              fill
              alt="thumbnail image preview"
              className="border border-gray-300 object-cover object-center"
            />
          ) : (
            <Image src="/images/icon/upload.svg" alt="Article Thumbnail Upload Button" width={50} height={50} />
          )}
        </button>
      </div>
      <input type="file" hidden ref={inputRef} onChange={handleUpload} />
    </section>
  );
}
