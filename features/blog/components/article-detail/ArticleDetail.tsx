import { Article } from '../../../../services/@types/article';
import ArticleCommentForm from './comment/ArticleCommentForm';
import ArticleComments from './comment/ArticleComments';
import ArticleContent from './content/ArticleContent';
import RelationArticles from './relation-articles/RelationArticles';
import ArticleViewCount from './view-count/ArticleViewCount';

interface Props {
  article: Article;
}

export default function ArticleDetail({ article }: Props) {
  return (
    <article className="flex w-full flex-col items-center gap-12 px-[100px] py-[50px] mobile:px-0 mobile:py-5">
      <ArticleContent article={article} />
      <RelationArticles article={article} />
      <ArticleComments comments={article.comments} />
      <ArticleCommentForm articleId={article.id} />
      <ArticleViewCount articleId={article.id} />
    </article>
  );
}
