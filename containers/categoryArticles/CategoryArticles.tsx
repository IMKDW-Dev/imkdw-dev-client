import CategoryArticleItem from './CategoryArticleItem';

export default function CategoryArticles() {
  return (
    <section className="w-full pt-[80px]">
      <ul className="flex w-full flex-wrap">
        <CategoryArticleItem />
        <CategoryArticleItem />
        <CategoryArticleItem />
        <CategoryArticleItem />
        <CategoryArticleItem />
        <CategoryArticleItem />
      </ul>
    </section>
  );
}
