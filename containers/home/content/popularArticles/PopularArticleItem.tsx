import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../../../services/@types/article';
import { formatDate } from '../../../../utils/data';

const DmSans = DM_Sans({ subsets: ['latin'] });

interface Props {
  article: Article;
}
export default function PopularArticleItem({ article }: Props) {
  return (
    <li className="box-shadow w-full rounded-xl border border-box bg-white p-3">
      <Link href={`/articles/${article.id}`} className="flex items-center gap-8 p-3">
        <div className="relative h-[250px] w-[270px] overflow-hidden rounded-xl">
          <Image src={article.thumbnail} layout="fill" alt="Server" objectFit="cover" />
          <div className="absolute left-0 top-5 rounded-r-[100px] bg-red-400 p-2 pl-5 pr-5 text-sm text-white">
            <b>Backend</b>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* 상단 - 조회수 */}
          <div className="flex gap-1">
            <Image src="/images/icon/eye.svg" width={20} height={20} alt="Eye" />
            <span className="ml-1 text-sm text-[#4D6385]">{article.viewCount} reads</span>
          </div>

          {/* 중간 - 제목, 내용 */}
          <div className="flex flex-col gap-4">
            <h3 className="flex flex-col gap-5 text-2xl font-bold">{article.title}</h3>
            <p
              className={clsx(
                DmSans.className,
                'line-clamp-3 max-w-[400px] overflow-hidden text-ellipsis text-[15px] leading-loose',
              )}
            >
              {article.content}
            </p>
          </div>

          {/* 바텀 - 해시태그, 작성일 */}
          <div className="flex justify-between pt-2">
            <ul className="flex gap-3">
              {article.tags.map((tag) => (
                <li key={tag.id}>
                  # <b>{tag.name}</b>
                </li>
              ))}
            </ul>
            <div>
              <p className="flex gap-1 text-[#4D6385]">
                <Image src="/images/icon/calendar.svg" width={18} height={18} alt="Calendar" />
                <span>{formatDate(article.createdAt)}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
