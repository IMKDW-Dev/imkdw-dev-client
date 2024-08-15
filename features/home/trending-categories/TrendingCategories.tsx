import Link from 'next/link';
import TrendingCategoryItem from './TrendingCategoryItem';
import { getCategories } from '../../../services/category';

export default async function TrendingCategories() {
  const SHOW_CATEGORY_COUNT = 5;
  const { categories } = await getCategories(SHOW_CATEGORY_COUNT);

  return (
    <section className="flex w-full px-5 mobile:px-0">
      <div className="flex w-full flex-col justify-center gap-3 pl-10 pr-10 mobile:px-0">
        <h2 className="flex w-full justify-center gap-2 text-xl">
          <span>💡</span>
          <b>Trending Categories</b>
        </h2>
        <div className="box-shadow flex w-full rounded-[150px] border border-box bg-white pb-5 pt-5 mobile:rounded-none">
          <ul className="flex w-[80%] items-center justify-center gap-5 mobile:w-full mobile:flex-wrap mobile:justify-start mobile:gap-0">
            {categories.map((category) => (
              <TrendingCategoryItem key={category.id} image={category.image} name={category.name} />
            ))}
          </ul>
          <div className="flex items-center justify-center gap-5 mobile:hidden">
            <b>or...</b>
            <Link href="/items" className="rounded-md bg-[#FF6481] pb-2 pl-4 pr-4 pt-2 text-white">
              Explore All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
