import Link from 'next/link';

import { GetArticlesSort } from '../../enums/article.enum';
import { Category } from '../../services/@types/category';
import { getArticles } from '../../services/article';
import CategoryArticleItem from './CategoryArticleItem';
import { getHeaderValue } from '../../functions/header.function';
import { X_PAGING_PAGE } from '../../constants/header.constants';
import OffsetPaging from '../../components/common/OffsetPaging';

interface Props {
  category: Category;
}
export default async function CategoryArticles({ category }: Props) {
  const currentPage = getHeaderValue(X_PAGING_PAGE) ? parseInt(getHeaderValue(X_PAGING_PAGE)!, 10) : 1;

  const GET_ARTICLE_LIMIT = 6;

  const { items, hasNextPage, hasPreviousPage, totalPage } = await getArticles({
    sort: GetArticlesSort.LATEST,
    categoryId: category.id,
    limit: GET_ARTICLE_LIMIT,
    page: currentPage,
  });

  return (
    <section className="flex w-full flex-col justify-center pt-[80px]">
      <ul className="flex w-full flex-wrap">
        {items.map((article) => (
          <CategoryArticleItem key={article.id} article={article} />
        ))}
      </ul>
      <OffsetPaging
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        link={`/categories/${category.name}`}
        totalPage={totalPage}
      />
    </section>
  );
}
