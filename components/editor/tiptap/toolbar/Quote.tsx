import { FormatQuote } from '@mui/icons-material';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {}

export default function TiptapQuote({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleBlockquote().run();

  return (
    <button type="button" onClick={handleClick} aria-label="blockquote">
      <FormatQuote />
    </button>
  );
}
