import { GetArticlesSort } from '../../enums/article.enum';
import { Category } from '../../services/@types/category';
import { getArticles } from '../../services/article';
import CategoryArticleItem from './CategoryArticleItem';

interface Props {
  category: Category;
}
export default async function CategoryArticles({ category }: Props) {
  const articles = await getArticles({
    sort: GetArticlesSort.LATEST,
    categoryId: category.id,
    limit: 999,
  });

  return (
    <section className="w-full pt-[80px]">
      <ul className="flex w-full flex-wrap">
        {articles.map((article) => (
          <CategoryArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </section>
  );
}
