import { Metadata } from 'next';

import generateCustomMetadata from '../../../utils/metadata';
import ArticleManageHeader from '../../../containers/manage/articles/header/ArticleManageHeader';
import ManageArticles from '../../../containers/manage/articles/list/Articles';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '게시글 관리',
    desc: '게시글 관리 페이지 입니다',
    link: 'https://imkdw.dev/manage/articles',
  }),
};

export default function ManageArticlePage() {
  return (
    <div className="flex w-full flex-col gap-5 p-6">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Articles</h1>
      </div>
      <div className="flex w-full flex-col gap-4 rounded-md bg-white p-6">
        <ArticleManageHeader />
        <ManageArticles />
      </div>
    </div>
  );
}
