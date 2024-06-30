import { JSONContent } from '@tiptap/core';
import { generateHTML } from '@tiptap/html';
import { removeHtmlTags } from './html';
import { tiptapExtensions } from '../components/editor/tiptap-extensions';

// eslint-disable-next-line import/prefer-default-export
export const jsonContentToText = (content: string) => {
  const jsonContent: JSONContent = {
    type: 'doc',
    content: JSON.parse(content),
  };

  const output = generateHTML(jsonContent, tiptapExtensions);
  return removeHtmlTags(output);
};
