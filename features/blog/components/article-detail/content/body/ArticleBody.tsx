import { JSDOM } from 'jsdom';
import hljs from 'highlight.js';

import '@/styles/editor/editor.css';
import '@/styles/editor/list.css';
import '@/styles/editor/heading.css';
import '@/styles/editor/link.css';
import '@/styles/editor/blockquote.css';
import '@/styles/editor/code.css';

interface Props {
  content: string;
}

export default function ArticleBody({ content }: Props) {
  const dom = new JSDOM(JSON.parse(content));
  const { document } = dom.window;

  document.querySelectorAll('pre code').forEach((block: unknown) => {
    hljs.highlightElement(block as HTMLElement);
  });

  // eslint-disable-next-line react/no-danger
  return <section className="tiptap-viewer" dangerouslySetInnerHTML={{ __html: document.body.innerHTML }} />;
}
