import { GetArticlesSort } from '../../../../enums/article.enum';
import { getArticles } from '../../../../services/article';
import PopularArticleItem from './PopularArticleItem';

export default async function PopularArticles() {
  const articles = await getArticles({ sort: GetArticlesSort.POPULAR, limit: 5 });

  return (
    <ul className="flex flex-col gap-5">
      {articles.map((article) => (
        <PopularArticleItem article={article} key={article.id} />
      ))}
    </ul>
  );
}
