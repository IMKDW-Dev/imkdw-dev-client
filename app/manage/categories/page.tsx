import { Metadata } from 'next';
import ManageCategory from '../../../features/category/components/manage-category/ManageCategory';
import generateCustomMetadata from '../../../utils/metadata';
import CategoryCreateButton from '../../../features/category/components/manage-category/CreateCategoryButton';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '카테고리 관리',
    desc: '카테고리 관리 페이지 입니다',
    link: 'https://imkdw.dev/manage/categories',
  }),
};

export default async function ManageCategoryPage() {
  return (
    <div className="flex w-full flex-col gap-5 p-6">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>
        <CategoryCreateButton />
      </div>
      <div className="w-full rounded-md bg-white p-6">
        <ManageCategory />
      </div>
    </div>
  );
}
