import Link from 'next/link';
import { getArticles } from '../../../../../services/article';
import { GetArticlesSort } from '../../../../../enums/article.enum';
import { Article } from '../../../../../services/@types/article';
import CategoryImage from '../../../../../components/category/CategoryImage';
import RelationArticleItem from './RelationArticleItem';

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
            <h3 className="text-2xl font-bold mobile:text-lg">{article.category.name}</h3>
          </div>
        </div>
        <Link
          href={`/categories/${article.category.name}`}
          className="rounded-md bg-[#8665f0] p-2 pl-4 pr-4 text-white hover:bg-black"
        >
          Show More
        </Link>
      </div>
      <ul className="flex w-full flex-col px-3">
        {items.map((item, index) => (
          <RelationArticleItem index={index + 1} article={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
