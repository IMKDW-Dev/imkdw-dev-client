import Link from 'next/link';
import CategoryImage from '../../../components/category/CategoryImage';
import { Article } from '../../../services/@types/article';
import { getArticles } from '../../../services/article';
import { GetArticlesSort } from '../../../enums/article.enum';

interface Props {
  article: Article;
}
export default async function RelationArticles({ article }: Props) {
  const { items } = await getArticles({
    sort: GetArticlesSort.LATEST,
    categoryId: article.category.id,
    limit: 3,
    excludeId: article.id,
  });

  return (
    <section className="box-shadow flex w-full flex-col gap-8 rounded-xl border border-box bg-white p-5">
      <div className="flex items-center justify-between gap-5">
        <CategoryImage image={article.category.image} name={article.category.name} />
        <div className="flex flex-1 flex-col gap-1">
          <p>
            More in this <b>Category</b>
          </p>
          <h3 className="text-2xl">
            <b>{article.category.name}</b>
          </h3>
        </div>
        <Link
          href={`/categories/${article.category.name}`}
          className="rounded-md bg-[#7e3f83] p-2 pl-4 pr-4 text-white hover:bg-black"
        >
          View All Articles
        </Link>
      </div>
      <ul className="flex w-full flex-col pl-5 pr-5">
        {items.map((relationArticle, index) => (
          <li className="border-b border-box pb-3 pt-3" key={relationArticle.id}>
            <Link href={`/articles/${relationArticle.id}`} className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-black text-white">
                <b>{index + 1}</b>
              </div>
              <h3>
                <b>{relationArticle.title}</b>
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
