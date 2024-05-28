import { GetArticlesFilter } from '../../../../../enums/article.enum';
import { getArticles } from '../../../../../services/article';
import RecentArticleItem from './RecentArticleItem';

export default async function RecentArticles() {
  const articles = await getArticles(GetArticlesFilter.LATEST, 3);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl">
        ✨ <b>Recent Articles</b>
      </h3>
      <ul className="flex flex-col gap-5">
        {articles.map((article) => (
          <RecentArticleItem article={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
}
