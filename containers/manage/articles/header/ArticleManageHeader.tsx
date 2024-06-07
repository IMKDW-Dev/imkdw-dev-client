import ArticleManageHeaderCategorySelector from './CategorySelector';
import ArticleManageHeaderSearch from './Search';

export default function ArticleManageHeader() {
  return (
    <div className="flex w-full items-center gap-5">
      <ArticleManageHeaderSearch />
      <ArticleManageHeaderCategorySelector />
    </div>
  );
}
