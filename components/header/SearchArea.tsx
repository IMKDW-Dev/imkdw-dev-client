'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchModal from '../common/modals/SearchModal';

export default function SearchArea() {
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearch(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    if (isSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearch(false);
  };

  return (
    <>
      <button className="flex flex-row gap-2" type="button" onClick={() => setIsSearch(true)}>
        <span>
          <Image src="/images/icon/search.svg" width={24} height={24} alt="Search" />
        </span>
        <span>Quick Search...</span>
      </button>
      {isSearch && (
        <SearchModal>
          <form className="flex w-full rounded-lg" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type to start you search"
              className="h-[50px] flex-1 rounded-l-lg p-2 pl-4 pr-4"
            />
            <button type="submit" className="rounded-r-lg bg-[#FF6481] p-2 pl-3 pr-3 text-white">
              Search
            </button>
          </form>
        </SearchModal>
      )}
    </>
  );
}
