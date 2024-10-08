import { Metadata } from 'next';
import Categories from '../../features/category/components/categories/Categories';
import generateCustomMetadata from '../../utils/metadata';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '카테고리 목록',
    desc: '카테고리 목록 페이지입니다.',
    link: 'https://imkdw.dev/categories',
  }),
};

export default function CategoryListPage() {
  return (
    <section className="flex w-full flex-col gap-5 pt-[80px]">
      <h1 className="text-center text-3xl">
        <b>Explore My Blog Categories</b> ✨
      </h1>
      <p className="text-center leading-loose">
        You can check artcie by category that fit the nature of articles
        <br />
        Use the search function to find more correct articles
      </p>
      <Categories />
    </section>
  );
}
