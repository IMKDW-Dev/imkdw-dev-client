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
    page: 1,
  });

  return (
    <section className="box-shadow flex w-full flex-col gap-8 rounded-xl border border-box bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <CategoryImage image={article.category.image} name={article.category.name} />
          <div className="flex flex-1 flex-col justify-center gap-1">
            <p className="mobile:text-sm">
              More in this <b>Category</b>
            </p>
            <h3 className="mobile:text-lg text-2xl">
              <b>{article.category.name}</b>
            </h3>
          </div>
        </div>
        <Link
          href={`/categories/${article.category.name}`}
          className="rounded-md bg-[#8665f0] p-2 pl-4 pr-4 text-white hover:bg-black"
        >
          All Articles
        </Link>
      </div>
      <ul className="flex w-full flex-col px-3">
        {items.map((relationArticle, index) => (
          <li className="border-b border-box py-3" key={relationArticle.id}>
            <Link href={`/articles/${relationArticle.id}`} className="flex items-center gap-3">
              <div className="flex min-h-[25px] min-w-[25px] items-center justify-center rounded-md bg-black text-white">
                <p className="text-center font-bold">{index + 1}</p>
              </div>
              <h3 className="mobile:text-lg line-clamp-1 overflow-hidden text-ellipsis font-bold">
                {relationArticle.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
