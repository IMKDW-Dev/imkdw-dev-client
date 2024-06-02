import { headers } from 'next/headers';

export default function SearchPage() {
  const headerList = headers();
  const pathname = headerList.get('x-search-query') || '';

  return <section>{pathname}</section>;
}
