'use client';

import { EditorContent, JSONContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';

import Toolbar from './Toolbar';
import { tiptapExtensions } from './tiptap-extensions';

import './styles/editor.css';
import './styles/blockquote.css';
import './styles/code.css';
import './styles/codeblock.css';

interface Props {
  value: JSONContent | null;
  onChange: (value: JSONContent | null) => void;
  onUploadImage: (imageUrl: string) => void;
}
export default function TiptapEditor({ value, onChange, onUploadImage }: Props) {
  const editor = useEditor({
    extensions: tiptapExtensions,
    autofocus: true,
    editable: true,
    content: value,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onUpdate({ editor }) {
      onChange(editor.getJSON());
    },
  });

  useEffect(() => {
    editor?.commands.setContent(value);
  }, [value]);

  return editor ? (
    <div className="flex flex-col">
      <Toolbar editor={editor} onUploadImage={onUploadImage} />
      <EditorContent editor={editor} className="min-h-[500px] w-full border border-t-0 border-gray-200 bg-white p-3" />
    </div>
  ) : null;
}
