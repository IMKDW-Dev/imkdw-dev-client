import { Extension, NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

import './styles/codeblock.css';

interface Props {
  updateAttributes: any;
  extension: Extension;
}
export default function CodeBlock({ updateAttributes, extension }: Props) {
  return (
    <NodeViewWrapper className="code-block">
      <select contentEditable={false} onChange={(event) => updateAttributes({ language: event.target.value })}>
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
}
