'use client';

import { Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

interface Props {
  currentPage: number;
  totalPage: number;
}

export default function ArticleManagePagination({ currentPage, totalPage }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', value.toString());

    const queryString = params.toString();
    const url = `/manage/articles?${queryString}`;

    router.push(url);
  };

  return (
    <Pagination
      count={totalPage}
      page={currentPage}
      showFirstButton
      showLastButton
      className="flex justify-center pt-3"
      onChange={handleChange}
    />
  );
}
