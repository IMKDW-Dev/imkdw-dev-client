import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

import './content.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

interface Props {
  content: string;
}

export default function ArticleDetailContent({ content }: Props) {
  // eslint-disable-next-line react/no-danger
  return <section dangerouslySetInnerHTML={{ __html: content }} />;
}
