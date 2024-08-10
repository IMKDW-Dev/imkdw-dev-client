import tiptapExtensions from '@/components/editor_v2/tiptap/extensions';
import Toolbar from '@/components/editor_v2/tiptap/toolbar/Toolbar';
import { Editor } from '@tiptap/core';
import { EditorContent, useEditor } from '@tiptap/react';
import { useCallback } from 'react';

import './styles/tiptap.css';

interface Props {
  value: string;
  changeValue: (value: string) => void;
  uploadImage: (imageUrl: string) => void;
}

export default function Tiptap({ value, changeValue, uploadImage }: Props) {
  const handleUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      const newContent = editor.getJSON().text;
      if (newContent && newContent !== value) {
        changeValue(newContent);
      }
    },
    [changeValue, value],
  );

  const editor = useEditor({
    extensions: tiptapExtensions,
    content: value,
    onUpdate: handleUpdate,
  });

  return editor ? (
    <div>
      <Toolbar editor={editor} uploadImage={uploadImage} />
      <EditorContent editor={editor} />
    </div>
  ) : null;
}
