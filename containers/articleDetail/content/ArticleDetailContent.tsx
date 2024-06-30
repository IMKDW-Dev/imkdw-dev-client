'use client';

import { generateHTML } from '@tiptap/html';
import { JSONContent } from '@tiptap/core';
import { useEffect } from 'react';
import hljs from 'highlight.js';

import './styles/editor.css';
import './styles/blockquote.css';
import './styles/code.css';
import './styles/codeblock.css';
import './styles/link.css';
import './styles/image.css';

import { tiptapExtensions } from '../../../components/editor/tiptap-extensions';

interface Props {
  content: string;
}

export default function ArticleDetailContent({ content }: Props) {
  const jsonContent: JSONContent = {
    type: 'doc',
    content: JSON.parse(content),
  };

  const output = generateHTML(jsonContent, tiptapExtensions);

  useEffect(() => {
    hljs.highlightAll();
  }, [output]);

  // eslint-disable-next-line react/no-danger
  return <section dangerouslySetInnerHTML={{ __html: output }} />;
}
