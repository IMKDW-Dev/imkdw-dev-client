import clsx from 'clsx';
import OffsetPaging from '../../components/common/OffsetPaging';
import SearchForm from '../../components/search/SearchForm';
import { X_PAGING_PAGE, X_SEARCH_QUERY } from '../../constants/header.constants';
import ArticleItem from '../../containers/articles/ArticleItem';
import { GetArticlesSort } from '../../enums/article.enum';
import { getHeaderValue } from '../../functions/header.function';
import { getArticles } from '../../services/article';

export default async function SearchPage() {
  const currentPage = getHeaderValue(X_PAGING_PAGE) ? parseInt(getHeaderValue(X_PAGING_PAGE)!, 10) : 1;
  const searchText = getHeaderValue(X_SEARCH_QUERY) || '';

  const GET_ARTICLE_LIMIT = 6;

  const { items, hasNextPage, hasPreviousPage, totalPage } = await getArticles({
    sort: GetArticlesSort.LATEST,
    limit: GET_ARTICLE_LIMIT,
    page: currentPage,
    search: searchText,
  });

  return (
    <section className={clsx('flex w-full flex-col items-center gap-10 pt-[80px]')}>
      <h1 className="mobile:text-lg text-center font-bold">
        Search results for: &quot;{decodeURIComponent(searchText)}&quot;
      </h1>
      <div className="mobile:w-[80%] w-1/2">
        <SearchForm defaultText={decodeURIComponent(searchText)} />
      </div>
      {items.length ? (
        <>
          <ul className="flex w-full flex-wrap">
            {items.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </ul>
          <OffsetPaging
            currentPage={currentPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            link={`/search?search=${searchText}`}
            totalPage={totalPage}
          />
        </>
      ) : (
        <div className="justify-cetner flex w-full items-center justify-center py-[100px] text-4xl text-gray-300">
          Nothing...
        </div>
      )}
    </section>
  );
}
