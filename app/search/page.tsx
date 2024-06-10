import clsx from 'clsx';
import { notFound } from 'next/navigation';

import OffsetPaging from '../../components/common/OffsetPaging';
import SearchForm from '../../components/search/SearchForm';
import { X_PAGING_PAGE, X_SEARCH_QUERY } from '../../constants/header.constants';
import ArticleItem from '../../containers/articles/ArticleItem';
import { GetArticlesSort } from '../../enums/article.enum';
import { getHeaderValue } from '../../functions/header.function';
import { getArticles } from '../../services/article';
import generateCustomMetadata from '../../utils/metadata';

export async function generateMetadata() {
  const currentPage = getHeaderValue(X_PAGING_PAGE) ? parseInt(getHeaderValue(X_PAGING_PAGE)!, 10) : 1;
  const searchText = getHeaderValue(X_SEARCH_QUERY) || '';

  try {
    const GET_ARTICLE_LIMIT = 6;

    const { totalPage } = await getArticles({
      sort: GetArticlesSort.LATEST,
      limit: GET_ARTICLE_LIMIT,
      page: currentPage,
      search: searchText,
    });

    return {
      ...generateCustomMetadata({
        title: `${decodeURIComponent(searchText)} 검색결과`,
        desc: `총 ${totalPage * GET_ARTICLE_LIMIT}개의 게시글이 검색되었습니다`,
        link: `/search?search=${searchText}&page=${currentPage}`,
      }),
    };
  } catch (error: any) {
    if (error.message?.includes('404')) {
      return notFound();
    }
  }

  return null;
}

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
      <h1 className="text-center font-bold mobile:text-lg">
        Search results for: &quot;{decodeURIComponent(searchText)}&quot;
      </h1>
      <div className="w-1/2 mobile:w-[80%]">
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
