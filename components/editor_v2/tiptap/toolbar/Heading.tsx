import { ToolbarProps } from '@/components/editor_v2/tiptap/toolbar/types/toolbar';
import { Level } from '@tiptap/extension-heading';

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
