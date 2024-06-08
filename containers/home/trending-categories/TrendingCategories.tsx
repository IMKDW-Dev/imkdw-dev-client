import Link from 'next/link';
import TrendingCategoryItem from './TrendingCategoryItem';
import { getCategories } from '../../../services/category';

export default async function TrendingCategories() {
  const SHOW_CATEGORY_COUNT = 5;
  const response = await getCategories(SHOW_CATEGORY_COUNT);
  const { categories } = response;

  return (
    <section className="mobile:px-0 flex w-full px-5">
      <div className="mobile:px-0 flex w-full flex-col justify-center gap-3 pl-10 pr-10">
        <h2 className="flex w-full justify-center gap-2 text-xl">
          <span>💡</span>
          <b>Trending Categories</b>
        </h2>
        <div className="box-shadow mobile:rounded-none flex w-full rounded-[150px] border border-box bg-white pb-5 pt-5">
          <ul className="mobile:w-full mobile:flex-wrap mobile:gap-0 mobile:justify-start flex w-[80%] items-center justify-center gap-5">
            {categories.map((category) => (
              <TrendingCategoryItem key={category.id} image={category.image} name={category.name} />
            ))}
          </ul>
          <div className="mobile:hidden flex items-center justify-center gap-5">
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
