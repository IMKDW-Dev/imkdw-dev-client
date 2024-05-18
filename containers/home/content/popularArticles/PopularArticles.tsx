import PopularArticleItem from './PopularArticleItem';

export default function PopularArticles() {
  return (
    <ul className="flex flex-col gap-5">
      <PopularArticleItem />
      <PopularArticleItem />
      <PopularArticleItem />
      <PopularArticleItem />
      <PopularArticleItem />
    </ul>
  );
}
