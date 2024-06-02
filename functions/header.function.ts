import { headers } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export const getHeaderValue = (key: string) => {
  const headerList = headers();
  return headerList.get(key);
};
