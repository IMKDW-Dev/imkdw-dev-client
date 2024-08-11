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
import { ReactNodeViewRenderer } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Link from '@tiptap/extension-link';
import ImageResize from 'tiptap-extension-resize-image';
import { all, createLowlight } from 'lowlight';
import CodeBlock from './CodeBlock';

const lowlight = createLowlight(all);

const tiptapExtensions = [
  Heading.configure({ levels: [1, 2, 3, 4] }),
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
  ImageResize.configure({
    inline: true,
    HTMLAttributes: {
      class: 'editor-image',
    },
  }),
  Link.configure({
    HTMLAttributes: {
      class: 'editor-link',
    },
  }),
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

export default tiptapExtensions;
