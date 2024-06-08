'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import SearchModal from '../common/modals/SearchModal';
import SearchForm from '../search/SearchForm';
import useSearch from '../../stores/use-search';

export default function SearchArea() {
  const { isSearch, setIsSearch } = useSearch((state) => state);

  useEffect(() => {
    /**
     * ECS 누를경우 검색창 종료 등록
     */
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
  }, [isSearch, setIsSearch]);

  return (
    <>
      <button className="flex flex-row gap-2 outline-none" type="button" onClick={() => setIsSearch(true)}>
        <span>
          <Image src="/images/icon/search.svg" width={24} height={24} alt="Search" />
        </span>
        <span className="mobile:hidden">Quick Search...</span>
      </button>
      {isSearch && (
        <SearchModal>
          <SearchForm defaultText="" />
        </SearchModal>
      )}
    </>
  );
}
