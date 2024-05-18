import Image from 'next/image';
import Link from 'next/link';

export default function TrendingCategoryItem() {
  return (
    <li className="relative flex w-[15%] cursor-pointer items-center justify-center gap-2">
      <Link href="/categories/1" className="flex flex-col gap-2">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
          <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
        </div>
        <h3>
          <b>Backend</b>
        </h3>
      </Link>
    </li>
  );
}
