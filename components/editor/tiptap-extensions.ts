import { Code } from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import Image from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';

import CodeBlock from './CodeBlock';
import { lowlight } from './lowlight';

// eslint-disable-next-line import/prefer-default-export
export const tiptapExtensions = [
  Heading.configure({ levels: [2, 3, 4] }),
  Document,
  Paragraph,
  Text,
  Underline,
  Strike,
  Code,
  Highlight,
  Blockquote,
  Bold,
  Image,
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlock);
    },
  }).configure({ lowlight }),
];
