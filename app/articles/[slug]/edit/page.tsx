import EditArticleForm from '../../../../containers/editArticle/EditArticleForm';
import { getArticleDetail } from '../../../../services/article';

export default async function ArticleWritePage({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug);

  return (
    <section className="w-full pt-[50px]">
      <EditArticleForm article={article} />
    </section>
  );
}
