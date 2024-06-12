'use client';

import { JSONContent } from '@tiptap/core';
import TiptapEditor from './Tiptap';

interface Props {
  value: JSONContent | null;
  onChange: (value: JSONContent | null) => void;
}

export default function Editor({ value, onChange }: Props) {
  return <TiptapEditor value={value} onChange={onChange} />;
}
