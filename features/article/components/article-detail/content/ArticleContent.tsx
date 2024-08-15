import { Article } from '../../../../../services/@types/article';
import ArticleAds from './ads/ArticleAds';
import ArticleBody from './body/ArticleBody';
import ArticleHeader from './header/ArticleHeader';
import ArticleShare from './share/ArticleShare';

interface Props {
  article: Article;
}

export default function ArticleContent({ article }: Props) {
  return (
    <section className="box-shadow relative flex w-full flex-col gap-8 rounded-lg border border-box bg-white p-8 mobile:p-4">
      <ArticleHeader title={article.title} createdAt={article.createdAt} />
      <ArticleAds />
      <ArticleBody content={article.content} />
      <ArticleShare article={article} />
    </section>
  );
}
