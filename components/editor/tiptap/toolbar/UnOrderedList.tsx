import { FormatListBulleted } from '@mui/icons-material';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {}

export default function TiptapUnOrderedList({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleBulletList().run();

  return (
    <button type="button" onClick={handleClick} aria-label="unordered list">
      <FormatListBulleted />
    </button>
  );
}
