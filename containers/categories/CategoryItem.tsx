import Image from 'next/image';
import Link from 'next/link';

export default function CategoryItem() {
  return (
    <li className="w-1/4 p-5">
      <Link href="/categories/1" className="flex items-center justify-center gap-4">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
          <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
        </div>
        <div>
          <h3>
            <b>Backend</b>
          </h3>
          <p className="text-sm">9 Articles</p>
        </div>
      </Link>
    </li>
  );
}
