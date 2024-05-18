import Image from 'next/image';
import Link from 'next/link';

export default function RecentArticleItem() {
  return (
    <li>
      <Link href="" className="flex gap-5">
        <div className="profile relative h-[100px] w-[100px] overflow-hidden rounded-md">
          <Image src="/images/pepe_profile.png" layout="fill" alt="Server" objectFit="cover" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h4>
            <b>Welcome to IMKDW Dev</b>
          </h4>
          <p className="flex gap-1 text-[#4D6385]">
            <Image src="/images/icon/calendar.svg" width={20} height={20} alt="Calendar" />
            <span>2024. 05. 18</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
