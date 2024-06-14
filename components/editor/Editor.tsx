'use client';

import { JSONContent } from '@tiptap/core';
import TiptapEditor from './Tiptap';

interface Props {
  value: JSONContent | null;
  onChange: (value: JSONContent | null) => void;
  onUploadImage: (imageUrl: string) => void;
}

export default function Editor({ value, onChange, onUploadImage }: Props) {
  return <TiptapEditor value={value} onChange={onChange} onUploadImage={onUploadImage} />;
}
