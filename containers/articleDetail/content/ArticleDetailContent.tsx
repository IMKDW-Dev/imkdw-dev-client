'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';

import './styles/editor.css';
import './styles/blockquote.css';
import './styles/code.css';
import './styles/codeblock.css';
import './styles/link.css';
import './styles/image.css';

interface Props {
  content: string;
}

export default function ArticleDetailContent({ content }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  // eslint-disable-next-line react/no-danger
  return <section dangerouslySetInnerHTML={{ __html: content }} />;
}
