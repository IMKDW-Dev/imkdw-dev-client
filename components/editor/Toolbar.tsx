import {
  Code,
  FormatBold,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  Image,
} from '@mui/icons-material';
import { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/react';
import { ChangeEvent, useRef } from 'react';
import { v4 } from 'uuid';
import { getUploadUrl, postUploadFile } from '../../services/storage';

interface Props {
  editor: Editor;
  onUploadImage: (imageUrl: string) => void;
}
export default function Toolbar({ editor, onUploadImage }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleHeading = (level: Level) => editor.chain().focus().setHeading({ level }).run();
  const handleBold = () => editor.chain().focus().toggleBold().run();
  const handleUnderline = () => editor.commands.toggleUnderline();
  const handleBlockquote = () => editor.chain().focus().toggleBlockquote().run();
  const handleCode = () => editor.chain().focus().toggleCode().run();
  const handleOrderedList = () => editor.chain().focus().toggleOrderedList().run();
  const handleUnorderedList = () => editor.chain().focus().toggleBulletList().run();

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const fileExt = file?.name.split('.').pop();
    const filename = v4();
    const fullFilename = `${filename}.${fileExt}`;

    const uploadUrl = await getUploadUrl(fullFilename);
    await postUploadFile(uploadUrl.url, file!);

    const imageUrl = `${process.env.NEXT_PUBLIC_PREGISNED_URL}/${fullFilename}`;
    editor.chain().focus().setImage({ src: imageUrl, alt: 'image', title: 'image' }).run();
    onUploadImage(fullFilename);
  };

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <ul className="flex w-full gap-1 border border-gray-200 bg-white p-2">
      <li className="flex items-center gap-4 p-2">
        <button type="button" onClick={() => handleHeading(2)} className="text-xl font-bold">
          H2
        </button>
        <button type="button" onClick={() => handleHeading(3)} className="text-xl font-bold">
          H3
        </button>
        <button type="button" onClick={() => handleHeading(4)} className="text-xl font-bold">
          H4
        </button>
        <button type="button" onClick={() => handleBold()} aria-label="format bold">
          <FormatBold />
        </button>
        <button type="button" onClick={() => handleUnderline()} aria-label="format underlined">
          <FormatUnderlined />
        </button>
        <button type="button" onClick={() => handleBlockquote()} aria-label="blockquote">
          <FormatQuote />
        </button>
        <button type="button" onClick={() => handleCode()} aria-label="code block">
          <Code />
        </button>
        <button type="button" onClick={handleClickUpload} aria-label="code block">
          <Image />
        </button>
        <button type="button" onClick={() => handleUnorderedList()} aria-label="unordered list">
          <FormatListBulleted />
        </button>
        <button type="button" onClick={() => handleOrderedList()} aria-label="ordered list">
          <FormatListNumbered />
        </button>
      </li>
      <input type="file" hidden ref={inputRef} onChange={handleUploadImage} />
    </ul>
  );
}
