'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useSearch from '../../stores/use-search';

interface Props {
  defaultText: string;
}
export default function SearchForm({ defaultText }: Props) {
  const [searchText, setSearchText] = useState(defaultText ?? '');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setIsSearch } = useSearch((state) => state);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchText) return;

    setIsSearch(false);
    router.push(`/search?search=${searchText}&page=1`);
  };

  return (
    <form className="flex w-full rounded-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to start you search"
        className="h-[50px] flex-1 rounded-l-lg border border-box p-2 pl-4 pr-4"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="rounded-r-lg bg-[#FF6481] p-2 pl-3 pr-3 text-white">
        Search
      </button>
    </form>
  );
}
