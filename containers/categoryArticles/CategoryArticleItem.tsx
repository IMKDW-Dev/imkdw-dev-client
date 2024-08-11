import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../services/@types/article';
import { articleContentToPlainText } from '../../utils/article';

interface Props {
  article: Article;
}
export default function CategoryArticleItem({ article }: Props) {
  return (
    <li className="w-1/3 p-5 mobile:w-full">
      <div className="box-shadow flex flex-col gap-4 rounded-lg border border-box bg-white pb-5">
        <Link
          href={`/articles/${article.id}`}
          className="profile relative h-[250px] w-full overflow-hidden rounded-tl-xl rounded-tr-xl"
        >
          <Image src={article.thumbnail} alt={`${article.title}'s thumbnail`} className="object-cover" fill />
          <div className="absolute left-0 top-5 rounded-r-[100px] bg-red-400 p-2 pl-5 pr-5 text-sm text-white">
            <b>{article.category.name}</b>
          </div>
        </Link>
        <div className="flex flex-col gap-3 p-2">
          <h3 className="text-center">
            <Link href={`/articles/${article.id}`}>
              <b className="line-clamp-2 overflow-hidden text-ellipsis text-lg">{article.title}</b>
            </Link>
          </h3>
          <p className="line-clamp-3 overflow-hidden text-ellipsis text-center">
            {articleContentToPlainText(article.content)}
          </p>
          <div className="flex justify-center gap-1">
            <Image src="/images/icon/eye.svg" width={20} height={20} alt="Eye" />
            <span className="ml-1 text-sm text-[#4D6385]">{article.viewCount} reads</span>
          </div>
        </div>
      </div>
    </li>
  );
}
