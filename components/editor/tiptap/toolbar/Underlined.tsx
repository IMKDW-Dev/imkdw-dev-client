import { FormatUnderlined } from '@mui/icons-material';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {}

export default function TiptapUnderlined({ editor }: Props) {
  const handleClick = () => editor.commands.toggleUnderline();

  return (
    <button type="button" onClick={handleClick} aria-label="format underlined">
      <FormatUnderlined />
    </button>
  );
}
