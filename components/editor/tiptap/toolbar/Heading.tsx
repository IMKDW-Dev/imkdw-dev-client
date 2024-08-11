import { Level } from '@tiptap/extension-heading';
import { ToolbarProps } from './types/toolbar';

interface Props extends ToolbarProps {
  level: Level;
}

export default function TiptapHeading({ editor, level }: Props) {
  const handleClick = () => {
    editor.chain().focus().setHeading({ level }).run();
  };

  return (
    <button type="button" onClick={handleClick} className="text-xl font-bold">
      H{level}
    </button>
  );
}
