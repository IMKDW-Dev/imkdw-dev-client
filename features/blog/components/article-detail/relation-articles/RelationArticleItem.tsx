import Link from 'next/link';
import { Article } from '../../../../../services/@types/article';

interface Props {
  index: number;
  article: Article;
}

export default function RelationArticleItem({ index, article }: Props) {
  return (
    <li className="border-b border-box py-3" key={article.id}>
      <Link href={`/articles/${article.id}`} className="flex items-center gap-3">
        <div className="flex min-h-[25px] min-w-[25px] items-center justify-center rounded-md bg-black text-white">
          <p className="text-center font-bold">{index}</p>
        </div>
        <h3 className="line-clamp-1 overflow-hidden text-ellipsis text-xl mobile:text-lg">{article.title}</h3>
      </Link>
    </li>
  );
}
