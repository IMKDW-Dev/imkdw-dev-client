import { ToolbarProps } from '@/components/editor_v2/tiptap/toolbar/types/toolbar';
import { FormatBold } from '@mui/icons-material';

interface Props extends ToolbarProps {}

export default function TiptapBold({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleBold().run();

  return (
    <button type="button" onClick={handleClick} aria-label="format bold">
      <FormatBold />
    </button>
  );
}
