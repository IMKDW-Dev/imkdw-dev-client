import { ToolbarProps } from '@/components/editor/tiptap/toolbar/types/toolbar';
import { FormatUnderlined } from '@mui/icons-material';

interface Props extends ToolbarProps {}

export default function TiptapUnderlined({ editor }: Props) {
  const handleClick = () => editor.commands.toggleUnderline();

  return (
    <button type="button" onClick={handleClick} aria-label="format underlined">
      <FormatUnderlined />
    </button>
  );
}
