import { JSDOM } from 'jsdom';
import hljs from 'highlight.js';

import '../../../../../../styles/editor/editor.css';
import '../../../../../../styles/editor/list.css';
import '../../../../../../styles/editor/heading.css';
import '../../../../../../styles/editor/link.css';
import '../../../../../../styles/editor/blockquote.css';
import '../../../../../../styles/editor/code.css';

interface Props {
  content: string;
}

export default function ArticleBody({ content }: Props) {
  const dom = new JSDOM(JSON.parse(content));
  const { document } = dom.window;

  document.querySelectorAll('pre code').forEach((block: HTMLElement) => hljs.highlightElement(block));

  document.querySelectorAll('h1, h2, h3, h4').forEach((_heading: HTMLElement, index: number) => {
    const heading = _heading;
    const id = index + 1;
    heading.id = `heading-${id}`;
    return _heading;
  });

  return (
    <section
      className="tiptap-viewer"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: document.body.innerHTML }}
    />
  );
}
