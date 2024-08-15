import { Metadata } from 'next';
import generateCustomMetadata from '../../../utils/metadata';
import CreateBookButton from '../../../features/book/components/manage-book/CreateBookButton';
import ManageBook from '../../../features/book/components/manage-book/ManageBook';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '책 관리',
    desc: '책 관리 페이지 입니다',
    link: 'https://imkdw.dev/manage/books',
  }),
};

export default async function ManageBookPage() {
  return (
    <div className="flex w-full flex-col gap-5 p-6">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Books</h1>
        <CreateBookButton />
      </div>
      <div className="w-full rounded-md bg-white p-6">
        <ManageBook />
      </div>
    </div>
  );
}
