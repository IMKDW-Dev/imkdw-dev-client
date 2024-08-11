// eslint-disable-next-line import/prefer-default-export
export function articleContentToPlainText(content: string) {
  return JSON.parse(content).replace(/<[^>]*>/g, '');
}
