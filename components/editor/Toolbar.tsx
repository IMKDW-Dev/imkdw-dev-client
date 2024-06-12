import { Code, FormatQuote } from '@mui/icons-material';
import { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/react';

interface Props {
  editor: Editor;
}
export default function Toolbar({ editor }: Props) {
  const handleHeading = (level: Level) => editor.chain().focus().setHeading({ level }).run();
  const handleBold = () => editor.chain().focus().toggleBold().run();
  const handleUnderline = () => editor.commands.toggleUnderline();
  const handleBlockquote = () => editor.chain().focus().toggleBlockquote().run();
  const handleCode = () => editor.chain().focus().toggleCode().run();

  return (
    <ul className="flex w-full gap-1 border border-gray-200 bg-white p-2">
      <li>
        <button type="button" onClick={() => handleHeading(2)} className="p-2 px-4 font-bold">
          H2
        </button>
        <button type="button" onClick={() => handleHeading(3)} className="p-2 px-4 font-bold">
          H3
        </button>
        <button type="button" onClick={() => handleHeading(4)} className="border-r border-gray-200 p-2 px-4 font-bold">
          H4
        </button>
        <button type="button" onClick={() => handleBold()} className="p-2 px-4 font-bold">
          B
        </button>
        <button type="button" onClick={() => handleUnderline()} className="p-2 px-4 font-bold">
          U
        </button>
        <button
          type="button"
          onClick={() => handleBlockquote()}
          className="border-r border-gray-200 p-2 px-4"
          aria-label="blockquote"
        >
          <FormatQuote />
        </button>
        <button type="button" onClick={() => handleCode()} className="p-2 px-4" aria-label="code block">
          <Code />
        </button>
      </li>
    </ul>
  );
}
