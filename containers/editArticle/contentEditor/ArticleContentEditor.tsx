'use client';

import Editor from '../../../components/editor/Editor';

interface Props {
  content: string;
  onChangeContent: (content: string) => void;
}
export default function ArticleContentEditor({ content, onChangeContent }: Props) {
  return <Editor value={content} onChange={onChangeContent} />;
}
