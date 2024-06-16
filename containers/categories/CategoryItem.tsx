import Link from 'next/link';
import { Category } from '../../services/@types/category';
import CategoryImage from '../../components/category/CategoryImage';

interface Props extends Pick<Category, 'image' | 'name' | 'articleCount'> {}
export default function CategoryItem({ articleCount, image, name }: Props) {
  return (
    <li className="w-1/4 p-4">
      <Link href={`/categories/${name}`} className="flex w-full items-center gap-4 px-4">
        <CategoryImage image={image} name={name} />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm">{articleCount} Articles</p>
        </div>
      </Link>
    </li>
  );
}
