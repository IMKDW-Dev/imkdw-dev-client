import { FormatBold } from '@mui/icons-material';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {}

export default function TiptapBold({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleBold().run();

  return (
    <button type="button" onClick={handleClick} aria-label="format bold">
      <FormatBold />
    </button>
  );
}
