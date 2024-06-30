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
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';

import CodeBlock from './CodeBlock';
import { lowlight } from './lowlight';

// eslint-disable-next-line import/prefer-default-export
export const tiptapExtensions = [
  Heading.configure({ levels: [2, 3, 4] }),
  Document,
  Paragraph.configure({
    HTMLAttributes: {
      class: 'paragraph',
    },
  }),
  Text,
  Underline,
  Strike,
  Code,
  Highlight,
  Blockquote,
  Bold,
  Image,
  OrderedList.configure({
    HTMLAttributes: {
      class: 'ordered-list-item',
    },
  }),
  BulletList.configure({
    HTMLAttributes: {
      class: 'unordered-list-item',
    },
  }),
  ListItem,
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlock);
    },
  }).configure({ lowlight }),
];
