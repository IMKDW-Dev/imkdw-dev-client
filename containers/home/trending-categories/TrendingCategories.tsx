import Link from 'next/link';
import TrendingCategoryItem from './TrendingCategoryItem';

export default function TrendingCategories() {
  return (
    <section className="flex w-full pl-5 pr-5">
      <div className="flex w-full flex-col justify-center gap-3 pl-10 pr-10">
        <h2 className="flex w-full justify-center gap-2 text-xl">
          <span>💡</span>
          <b>Trending Categories</b>
        </h2>
        <div className="box-shadow flex w-full rounded-[150px] border border-box bg-white pb-5 pt-5">
          <ul className="flex w-[80%] items-center justify-center gap-5">
            <TrendingCategoryItem />
            <TrendingCategoryItem />
            <TrendingCategoryItem />
            <TrendingCategoryItem />
            <TrendingCategoryItem />
          </ul>
          <div className="flex items-center justify-center gap-5">
            <b>or...</b>
            <Link href="/categories" className="rounded-md bg-[#FF6481] pb-2 pl-4 pr-4 pt-2 text-white">
              <b>Explore All</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
