import { Editor } from '@tiptap/core';
import { EditorContent, useEditor } from '@tiptap/react';
import { useCallback } from 'react';

import tiptapExtensions from './extensions';
import Toolbar from './toolbar/Toolbar';

import '../../../styles/editor/editor.css';
import '../../../styles/editor/list.css';
import '../../../styles/editor/heading.css';
import '../../../styles/editor/link.css';
import '../../../styles/editor/blockquote.css';
import '../../../styles/editor/code.css';

interface Props {
  value: string;
  changeValue: (value: string) => void;
  uploadImage: (imageUrl: string) => void;
}

export default function Tiptap({ value, changeValue, uploadImage }: Props) {
  const handleUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      const newContent = editor.getHTML();
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
