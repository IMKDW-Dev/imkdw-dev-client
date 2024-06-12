'use client';

import { JSONContent } from '@tiptap/core';
import Editor from '../../../components/editor/Editor';

interface Props {
  content: JSONContent | null;
  onChangeContent: (content: JSONContent | null) => void;
}
export default function ArticleContentEditor({ content, onChangeContent }: Props) {
  return <Editor value={content} onChange={onChangeContent} />;
}
