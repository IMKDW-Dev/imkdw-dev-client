import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarMonth } from '@mui/icons-material';

import { formatDate } from '../../../../utils/data';
import { removeHtmlTags } from '../../../../utils/html';
import { Article } from '../../../../services/@types/article';

const DmSans = DM_Sans({ subsets: ['latin'] });

interface Props {
  article: Article;
}
export default function PopularArticleItem({ article }: Props) {
  return (
    <li className="box-shadow w-full rounded-xl border border-box bg-white p-3">
      <Link href={`/articles/${article.id}`} className="mobile:flex-col flex w-full items-center gap-8 p-3">
        <div className="mobile:w-full relative h-[250px] w-[270px] overflow-hidden rounded-xl">
          <Image src={article.thumbnail} alt="Server" className="object-cover" fill />
          <div className="absolute left-0 top-5 rounded-r-[100px] bg-red-400 p-2 pl-5 pr-5 text-sm text-white">
            <b>{article.category.name}</b>
          </div>
        </div>
        <div className="mobile:w-full flex flex-1 flex-col gap-4">
          {/* 상단 - 조회수 */}
          <div className="mobile:justify-center flex gap-1">
            <Image src="/images/icon/eye.svg" width={20} height={20} alt="Eye" />
            <span className="ml-1 text-sm text-[#4D6385]">{article.viewCount} reads</span>
          </div>

          {/* 중간 - 제목, 내용 */}
          <div className="flex flex-col gap-4">
            <h3 className="mobile:text-center line-clamp-2 flex flex-col gap-5 overflow-hidden text-ellipsis text-2xl font-bold">
              {article.title}
            </h3>
            <p
              className={clsx(
                DmSans.className,
                'mobile:text-center line-clamp-3 max-w-[400px] overflow-hidden text-ellipsis text-[15px] leading-loose',
              )}
            >
              {removeHtmlTags(article.content)}
            </p>
          </div>

          {/* 바텀 - 해시태그, 작성일 */}
          <div className="flex items-center justify-between pt-2">
            <ul className="flex gap-3">
              {article.tags.map((tag) => (
                <li key={tag.id} className="rounded-md bg-gray-200 p-1 px-2 text-sm">
                  #<b>{tag.name}</b>
                </li>
              ))}
            </ul>
            <div>
              <p className="flex gap-1 text-[#4D6385]">
                <CalendarMonth sx={{ color: '#FF6481', fontSize: '18px' }} />
                <span>{formatDate(article.createdAt)}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
