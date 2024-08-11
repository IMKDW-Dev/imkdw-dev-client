import { ToolbarProps } from '@/components/editor/tiptap/toolbar/types/toolbar';
import { Code } from '@mui/icons-material';

interface Props extends ToolbarProps {}

export default function TiptapCode({ editor }: Props) {
  const handleClick = () => editor.chain().focus().toggleCode().run();

  return (
    <button type="button" onClick={handleClick} aria-label="code">
      <Code />
    </button>
  );
}
