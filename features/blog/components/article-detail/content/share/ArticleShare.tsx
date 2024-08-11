import ArticleShareButtons from '@/features/blog/components/article-detail/content/share/ArticleShareButtons';
import ArticleShareLink from '@/features/blog/components/article-detail/content/share/ArticleShareLink';
import { Article } from '@/services/@types/article';

interface Props {
  article: Article;
}
export default function ArticleShare({ article }: Props) {
  return (
    <section className="flex w-full flex-col items-center justify-center border-t border-box pb-7">
      <ArticleShareButtons article={article} />
      <ArticleShareLink articleId={article.id} />
    </section>
  );
}
