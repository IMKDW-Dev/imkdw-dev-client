'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

import 'react-quill/dist/quill.snow.css';
import './editor.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

const modules = {
  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: [2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'code-block'],
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function Editor({ value, onChange }: Props) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: true }), []);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      className="bg-white"
      placeholder="Input Content"
      modules={modules}
      formats={formats}
    />
  );
}
