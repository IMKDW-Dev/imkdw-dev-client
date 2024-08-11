import { notFound } from 'next/navigation';

import generateCustomMetadata from '../../../utils/metadata';
import { getArticleDetail } from '../../../services/article';
import ArticleCommentList from '../../../containers/articleDetail/comment/commentList/ArticleCommentList';
import ArticleDetailHeader from '../../../containers/articleDetail/header/ArticleDetailHeader';
import ArticleDetailContent from '../../../containers/articleDetail/content/ArticleDetailContent';
import ArticleShare from '../../../containers/articleDetail/share/ArticleShare';
import ArticleCommentForm from '../../../containers/articleDetail/comment/CommentForm';
import { formatDate } from '../../../utils/date';
import RelationArticles from '../../../containers/articleDetail/relationArticles/RelationArticles';
import ArticleViewCount from '../../../containers/articleDetail/viewCount/ArticleViewCount';
import { jsonContentToText } from '../../../utils/tiptap';
import ArticleDetail from '@/features/blog/components/article-detail/ArticleDetail';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articleId = params.slug;

  try {
    const article = await getArticleDetail(articleId);
    return {
      ...generateCustomMetadata({
        title: article.title,
        desc: jsonContentToText(article.content).slice(0, 150),
        link: `/articles/${articleId}`,
        image: article.thumbnail,
      }),
    };
  } catch (error: any) {
    if (error.message?.includes('404')) {
      return notFound();
    }
  }

  return null;
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const articleDetail = await getArticleDetail(params.slug);

  return (
    <ArticleDetail article={articleDetail} />
    // {/* 카테고리에 속한 다른 게시글들 */}
    // <RelationArticles article={articleDetail} />

    // {/* 댓글 목록 */}
    // <ArticleCommentList comments={articleDetail.comments} />

    // {/* 댓글 작성창 */}
    // <ArticleCommentForm articleId={articleDetail.id} />

    // {/* 조회수 추가용 컴포넌트 */}
    // <ArticleViewCount article={articleDetail} />
  );
}
