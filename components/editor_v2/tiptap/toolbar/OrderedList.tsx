import { ToolbarProps } from '@/components/editor_v2/tiptap/toolbar/types/toolbar';
import { FormatListNumbered } from '@mui/icons-material';

interface Props extends ToolbarProps {}

export default function TiptapOrderedList({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleOrderedList().run();

  return (
    <button type="button" onClick={handleClick} aria-label="ordered list">
      <FormatListNumbered />
    </button>
  );
}
