import RecentArticleItem from './RecentArticleItem';

export default function RecentArticles() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl">
        ✨ <b>Recent Articles</b>
      </h3>
      <ul className="flex flex-col gap-5">
        <RecentArticleItem />
        <RecentArticleItem />
        <RecentArticleItem />
      </ul>
    </div>
  );
}
