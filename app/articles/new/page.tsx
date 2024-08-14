import ArticleForm from '../../../features/article/components/article-form/ArticleForm';
import { getCategories } from '../../../services/category';

export default async function NewArticlePage() {
  const { categories } = await getCategories();
  return <ArticleForm categories={categories} mode="new" />;
}
