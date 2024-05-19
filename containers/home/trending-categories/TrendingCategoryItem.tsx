import Link from 'next/link';
import { Category } from '../../../services/@types/category';
import CategoryImage from '../../../components/category/CategoryImage';

interface Props extends Pick<Category, 'name' | 'image'> {}
export default function TrendingCategoryItem({ image, name }: Props) {
  return (
    <li className="relative flex w-[15%] cursor-pointer items-center justify-center gap-2">
      <Link href={`/categories/${name}`} className="flex flex-col items-center justify-center gap-2">
        <CategoryImage image={image} name={name} />
        <h3>
          <b>{name}</b>
        </h3>
      </Link>
    </li>
  );
}
