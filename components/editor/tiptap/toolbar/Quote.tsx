import { ToolbarProps } from '@/components/editor/tiptap/toolbar/types/toolbar';
import { FormatQuote } from '@mui/icons-material';

interface Props extends ToolbarProps {}

export default function TiptapQuote({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleBlockquote().run();

  return (
    <button type="button" onClick={handleClick} aria-label="blockquote">
      <FormatQuote />
    </button>
  );
}
