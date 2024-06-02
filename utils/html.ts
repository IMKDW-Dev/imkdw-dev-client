// eslint-disable-next-line import/prefer-default-export
export const removeHtmlTags = (html: string) => html.replace(/<[^>]*>/g, '');
