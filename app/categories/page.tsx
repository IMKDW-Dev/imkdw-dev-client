import Categories from '../../containers/categories/Categories';
import CategoryArticles from '../../containers/categoryArticles/CategoryArticles';

export default function CategoryListPage() {
  return (
    <section className="flex w-full flex-col gap-5 pt-[80px]">
      <h1 className="text-center text-3xl">
        <b>Explore My Blog Categories</b> ✨
      </h1>
      <p className="text-center leading-loose">
        You can check artci by category that fit the nature of articles
        <br />
        Use the search function to find more correct articles
      </p>
      <Categories />
      <CategoryArticles />
    </section>
  );
}
