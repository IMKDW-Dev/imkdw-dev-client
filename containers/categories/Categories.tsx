import CategoryItem from './CategoryItem';
import { getCategories } from '../../services/category';

export default async function Categories() {
  const response = await getCategories();
  const { categories } = response;

  return (
    <div className="w-full px-10">
      <ul className="box-shadow flex flex-wrap rounded-xl border border-box bg-white pb-10 pt-10">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            image={category.image}
            articleCount={category.articleCount}
          />
        ))}
      </ul>
    </div>
  );
}
