import { Image } from '@mui/icons-material';
import { ChangeEvent, useRef } from 'react';
import { v4 } from 'uuid';

import { ToolbarProps } from './types/toolbar';
import { getUploadUrl, postUploadFile } from '../../../../services/storage';

interface Props extends ToolbarProps {
  uploadImage: (imageUrl: string) => void;
}

export default function TiptapImage({ editor, uploadImage }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const fileExt = file?.name.split('.').pop();
    const fullFilename = `${v4()}.${fileExt}`;

    const uploadUrl = await getUploadUrl(fullFilename);
    await postUploadFile(uploadUrl.url, file!);

    const imageUrl = `${process.env.NEXT_PUBLIC_PREGISNED_URL}/${fullFilename}`;
    editor.chain().focus().setImage({ src: imageUrl, alt: 'image', title: 'image' }).run();
    uploadImage(fullFilename);
  };

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <button type="button" onClick={handleClickUpload} aria-label="code block">
        <Image />
      </button>
      <input type="file" hidden ref={inputRef} onChange={handleUploadImage} />
    </>
  );
}
