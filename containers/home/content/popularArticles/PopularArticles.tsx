import { GetArticlesSort } from '../../../../enums/article.enum';
import { getArticles } from '../../../../services/article';
import PopularArticleItem from './PopularArticleItem';

export default async function PopularArticles() {
  const { items } = await getArticles({ sort: GetArticlesSort.POPULAR, limit: 5, page: 1 });

  return (
    <ul className="flex flex-1 flex-col gap-5">
      {items.map((article) => (
        <PopularArticleItem article={article} key={article.id} />
      ))}
    </ul>
  );
}
