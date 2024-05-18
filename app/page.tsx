import HomeContent from '../containers/home/content/HomeContent';
import Introduce from '../containers/home/introduce/Introduce';
import TrendingCategories from '../containers/home/trending-categories/TrendingCategories';

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-[80px] pl-5 pr-5">
      <Introduce />
      <TrendingCategories />
      <HomeContent />
    </div>
  );
}
