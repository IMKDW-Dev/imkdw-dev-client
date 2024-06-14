'use client';

import { JSONContent } from '@tiptap/core';
import Editor from '../../../components/editor/Editor';

interface Props {
  content: JSONContent | null;
  onChangeContent: (content: JSONContent | null) => void;
  onUploadImage: (imageUrl: string) => void;
}
export default function ArticleContentEditor({ content, onChangeContent, onUploadImage }: Props) {
  return <Editor value={content} onChange={onChangeContent} onUploadImage={onUploadImage} />;
}
