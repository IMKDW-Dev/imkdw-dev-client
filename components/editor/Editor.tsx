'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import 'react-quill/dist/quill.snow.css';
import './editor.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function Editor({ value, onChange }: Props) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(_value) => onChange(_value)}
      className="bg-white"
      placeholder="Input Content"
    />
  );
}
