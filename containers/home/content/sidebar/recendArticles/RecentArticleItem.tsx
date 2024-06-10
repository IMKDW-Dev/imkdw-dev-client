import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../../../../utils/data';
import RecentArticleImage from './ArticleImage';
import { Article } from '../../../../../services/@types/article';

interface Props {
  article: Article;
}
export default function RecentArticleItem({ article }: Props) {
  return (
    <li>
      <Link href={`/articles/${article.id}`} className="flex gap-5">
        <RecentArticleImage image={article.thumbnail} title={article.title} />
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="line-clamp-1 overflow-hidden text-ellipsis font-bold">{article.title}</h4>
          <p className="flex gap-1 text-[#4D6385]">
            <Image src="/images/icon/calendar.svg" width={20} height={20} alt="Calendar" />
            <span>{formatDate(article.createdAt)}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
