import ArticleAds from '@/features/blog/components/article-detail/content/ads/ArticleAds';
import ArticleBody from '@/features/blog/components/article-detail/content/body/ArticleBody';
import ArticleHeader from '@/features/blog/components/article-detail/content/header/ArticleHeader';
import ArticleShare from '@/features/blog/components/article-detail/content/share/ArticleShare';
import { Article } from '@/services/@types/article';

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
