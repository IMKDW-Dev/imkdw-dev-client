import ArticleForm from '../../../../features/article/components/article-form/ArticleForm';
import { getArticle } from '../../../../services/article';
import { getCategories } from '../../../../services/category';

export default async function ArticleWritePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const { categories } = await getCategories();

  return (
    <section>
      <ArticleForm article={article} categories={categories} mode="edit" />
    </section>
  );
}
