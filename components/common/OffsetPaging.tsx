import Link from 'next/link';

interface Props {
  link: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  currentPage: number;
  totalPage: number;
}
export default function OffsetPaging({ link, hasPreviousPage, hasNextPage, currentPage, totalPage }: Props) {
  const urlSeparator = link.includes('?') ? '&' : '?';
  return (
    <div className="flex w-full items-center justify-center gap-5 pt-10">
      {hasPreviousPage && (
        <Link
          href={`${link}${urlSeparator}page=${currentPage - 1}`}
          className="w-[80px] rounded-md bg-[#FF6481] p-2 pl-3 pr-3 text-white hover:bg-black"
        >
          Previous
        </Link>
      )}

      <p className="text-center">
        Page {currentPage} of {totalPage}
      </p>
      {hasNextPage && (
        <Link
          href={`${link}${urlSeparator}page=${currentPage + 1}`}
          className="w-[80px] rounded-md bg-[#FF6481] p-2 pl-3 pr-3 text-center text-white hover:bg-black"
        >
          Next
        </Link>
      )}
    </div>
  );
}
