import Link from 'next/link';
import { Category } from '../../../services/@types/category';
import CategoryImage from '../../../components/category/CategoryImage';

interface Props extends Pick<Category, 'name' | 'image'> {}
export default function TrendingCategoryItem({ image, name }: Props) {
  return (
    <li className="relative flex w-[15%] cursor-pointer items-center justify-center gap-2 mobile:w-1/3 mobile:p-3">
      <Link href={`/categories/${name}`} className="flex flex-col items-center justify-center gap-2">
        <CategoryImage image={image} name={name} />
        <h3 className="text-lg font-bold mobile:text-sm">{name}</h3>
      </Link>
    </li>
  );
}
