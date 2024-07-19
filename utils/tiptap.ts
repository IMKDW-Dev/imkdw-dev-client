import { JSONContent } from '@tiptap/core';

// eslint-disable-next-line import/prefer-default-export
export const jsonContentToText = (content: string) => {
  const texts: string[] = [];

  try {
    const jsonContent: JSONContent = {
      type: 'doc',
      content: JSON.parse(content),
    };

    jsonContent.content?.forEach((item) => {
      if (item.type === 'paragraph' && item.content) {
        item.content.forEach((itemContent) => {
          if (itemContent.type === 'text') {
            texts.push(itemContent.text ?? '');
          }
        });
      }
    });

    return texts.join(' ');
  } catch (error) {
    return content;
  }
};
