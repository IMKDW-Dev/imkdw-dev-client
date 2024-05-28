import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import he from 'he';

import './content.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

interface Props {
  content: string;
}

export default function ArticleDetailContent({ content }: Props) {
  const highlightCode = (code: string) => {
    const highlightedCode = hljs.highlightAuto(he.decode(code)).value;
    return `<code>${highlightedCode}</code>`;
  };

  const highlightedContent = content.replace(
    /<pre[^>]*>([\s\S]*?)<\/pre>/gi,
    (match, code) => `<pre>${highlightCode(code)}</pre>`,
  );

  return <section dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
}
