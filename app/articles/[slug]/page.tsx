import { notFound } from 'next/navigation';

import { jsonContentToText } from '@/utils/tiptap';
import ArticleDetail from '@/features/blog/components/article-detail/ArticleDetail';
import { getArticle } from '@/services/article';
import generateCustomMetadata from '@/utils/metadata';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articleId = params.slug;

  try {
    const article = await getArticle(articleId);
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
  const article = await getArticle(params.slug);

  return <ArticleDetail article={article} />;
}
