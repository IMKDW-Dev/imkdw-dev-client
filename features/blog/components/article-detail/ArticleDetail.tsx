import RelationArticles from '@/containers/articleDetail/relationArticles/RelationArticles';
import ArticleContent from '@/features/blog/components/article-detail/content/ArticleContent';
import { Article } from '@/services/@types/article';

interface Props {
  article: Article;
}

export default function ArticleDetail({ article }: Props) {
  return (
    <article className="flex w-full flex-col items-center gap-12 px-[100px] py-[50px] mobile:px-0 mobile:py-5">
      <ArticleContent article={article} />
      <RelationArticles article={article} />
    </article>
  );
}
