import { X_CATEGORY_ID, X_PAGING_PAGE, X_SEARCH_QUERY } from '../../../../constants/header.constants';
import { GetArticlesSort } from '../../../../enums/article.enum';
import { getHeaderValue } from '../../../../functions/header.function';
import { getArticles } from '../../../../services/article';
import ManageArticleItem from './ArticleItem';
import ManageArticleListHeader from './ListHeader';
import ArticleManagePagination from './Pagination';

export default async function ManageArticles() {
  const currentPage = getHeaderValue(X_PAGING_PAGE) ? parseInt(getHeaderValue(X_PAGING_PAGE)!, 10) : 1;
  const searchText = getHeaderValue(X_SEARCH_QUERY) ?? '';
  const categoryId = getHeaderValue(X_CATEGORY_ID) ?? '';

  const GET_ARTICLE_LIMIT = 8;

  const { items, totalPage } = await getArticles({
    sort: GetArticlesSort.LATEST,
    limit: GET_ARTICLE_LIMIT,
    page: currentPage,
    search: searchText,
    categoryId: parseInt(categoryId, 10),
  });

  return (
    <div className="flex w-full flex-col justify-center">
      <ManageArticleListHeader />
      <ul className="flex w-full flex-col">
        {items.map((article) => (
          <ManageArticleItem article={article} key={article.id} />
        ))}
      </ul>
      <ArticleManagePagination currentPage={currentPage} totalPage={totalPage} />
    </div>
  );
}
