import { Metadata } from 'next';
import HomeContent from '../features/home/content/HomeContent';
import Introduce from '../features/home/introduce/Introduce';
import TrendingCategories from '../features/home/trending-categories/TrendingCategories';
import generateCustomMetadata from '../utils/metadata';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '메인',
    desc: '오픈소스로 운영되는 기술블로그 IMKDW DEV 입니다. 삽질하고 깨달은 내용에 대해서 기록합니다. 다양한 기술에 대한 내용을 다룹니다.',
    link: 'https://imkdw.dev',
  }),
};

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-[80px] px-5 mobile:px-0">
      <Introduce />
      <TrendingCategories />
      <HomeContent />
    </div>
  );
}
