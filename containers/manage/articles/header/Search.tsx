'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ArticleManageHeaderSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (searchText) {
      params.set('search', searchText);
    } else {
      params.delete('search');
    }

    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(url);
  };

  return (
    <form className="rounded-md border border-gray-300" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
        className="rounded-md p-2"
      />
    </form>
  );
}
