import { InsertLink } from '@mui/icons-material';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {}

export default function TiptapLink({ editor }: Props) {
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    const url = window.prompt('Enter the URL') ?? '';
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <button type="button" onClick={handleClick} aria-label="link">
      <InsertLink />
    </button>
  );
}
