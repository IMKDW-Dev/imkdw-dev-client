// eslint-disable-next-line import/prefer-default-export
export const formatDate = (_date: Date | string) => {
  const date = new Date(_date);

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    formatMatcher: 'basic',
  })
    .format(date)
    .replace(/\./g, '. ');
};
