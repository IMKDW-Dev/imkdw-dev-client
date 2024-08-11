import ArticleForm from '@/features/blog/components/article-form/ArticleForm';
import { getCategories } from '@/services/category';
import { getArticleDetail } from '../../../../services/article';

export default async function ArticleWritePage({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug);
  const { categories } = await getCategories();

  return (
    <section>
      <ArticleForm article={article} categories={categories} mode="edit" />
    </section>
  );
}
