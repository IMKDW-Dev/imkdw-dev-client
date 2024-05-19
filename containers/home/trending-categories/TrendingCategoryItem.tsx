import Image from 'next/image';
import Link from 'next/link';
import { Category } from '../../../services/@types/category';

interface Props extends Pick<Category, 'name' | 'image'> {}
export default function TrendingCategoryItem({ image, name }: Props) {
  return (
    <li className="relative flex w-[15%] cursor-pointer items-center justify-center gap-2">
      <Link href={`/categories/${name}`} className="flex flex-col items-center justify-center gap-2">
        {/* <div className="profile relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
          <Image src={image} layout="fill" alt="Server" objectFit="cover" />
        </div> */}
        <div className="profile relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
          <Image src={image} fill alt="Server" className="object-cover object-center" />
        </div>
        <h3>
          <b>{name}</b>
        </h3>
      </Link>
    </li>
  );
}
