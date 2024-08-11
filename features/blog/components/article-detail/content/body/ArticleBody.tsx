'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';

interface Props {
  content: string;
}

export default function ArticleBody({ content }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  // eslint-disable-next-line react/no-danger
  return <section dangerouslySetInnerHTML={{ __html: content }} />;
}
