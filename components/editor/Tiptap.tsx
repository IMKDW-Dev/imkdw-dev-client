import { EditorContent, JSONContent, useEditor } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import { useCallback, useEffect, useRef } from 'react';

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
  const editorRef = useRef<Editor | null>(null);

  const handleUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      const newContent = editor.getJSON();
      if (JSON.stringify(newContent) !== JSON.stringify(value)) {
        onChange(newContent);
      }
    },
    [onChange, value],
  );

  const editor = useEditor({
    extensions: tiptapExtensions,
    editable: true,
    content: value,
    onUpdate: handleUpdate,
  });

  useEffect(() => {
    editorRef.current = editor;
  }, [editor]);

  useEffect(() => {
    const currentEditor = editorRef.current;
    if (currentEditor && value && !currentEditor.isDestroyed) {
      const currentContent = currentEditor.getJSON();
      if (JSON.stringify(currentContent) !== JSON.stringify(value)) {
        const { from, to } = currentEditor.state.selection;
        currentEditor.commands.setContent(value, false);
        currentEditor.commands.setTextSelection({ from, to });
      }
    }
  }, [value]);

  return editor ? (
    <div className="flex flex-col">
      <Toolbar editor={editor} onUploadImage={onUploadImage} />
      <EditorContent editor={editor} className="min-h-[500px] w-full border border-t-0 border-gray-200 bg-white p-3" />
    </div>
  ) : null;
}
