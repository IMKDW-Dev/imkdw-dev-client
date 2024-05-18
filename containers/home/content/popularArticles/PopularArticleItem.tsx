import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const DmSans = DM_Sans({ subsets: ['latin'] });

export default function PopularArticleItem() {
  return (
    <li className="box-shadow w-full rounded-xl border border-box bg-white p-3">
      <Link href="" className="flex items-center gap-8 p-3">
        <div className="profile relative h-[250px] w-[270px] overflow-hidden rounded-xl">
          <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
        </div>
        <div className="flex flex-col gap-4">
          {/* 상단 - 조회수 */}
          <div className="flex gap-1">
            <Image src="/images/icon/eye.svg" width={20} height={20} alt="Eye" />
            <span className="ml-1 text-sm text-[#4D6385]">1,234 reads</span>
          </div>

          {/* 중간 - 제목, 내용 */}
          <div className="flex flex-col gap-4">
            <h3 className="flex flex-col gap-5 text-2xl">
              <b>Welcome to IMKDW Dev</b>
            </h3>
            <p
              className={clsx(
                DmSans.className,
                'line-clamp-3 max-w-[400px] overflow-hidden text-ellipsis text-[15px] leading-loose',
              )}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam architecto excepturi officiis natus
              autem deleniti vero nulla a ex sed non vitae beatae saepe, harum consequatur commodi ratione eaque
              corrupti.
            </p>
          </div>

          {/* 바텀 - 해시태그, 작성일 */}
          <div className="flex justify-between pt-2">
            <ul className="flex gap-3">
              <li>
                # <b>Tech</b>
              </li>
              <li>
                # <b>Blog</b>
              </li>
            </ul>
            <div>
              <p className="flex gap-1 text-[#4D6385]">
                <Image src="/images/icon/calendar.svg" width={18} height={18} alt="Calendar" />
                <span>2024. 05. 18</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
