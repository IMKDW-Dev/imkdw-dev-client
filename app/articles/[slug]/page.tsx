import { notFound } from 'next/navigation';
import generateCustomMetadata from '../../../utils/metadata';
import { articleContentToPlainText } from '../../../utils/article';
import { getArticle } from '../../../services/article';
import ArticleDetail from '../../../features/blog/components/article-detail/ArticleDetail';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articleId = params.slug;

  try {
    const article = await getArticle(articleId);
    return {
      ...generateCustomMetadata({
        title: article.title,
        desc: articleContentToPlainText(article.content).slice(0, 150),
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
  const article = await getArticle(params.slug);

  return <ArticleDetail article={article} />;
}
