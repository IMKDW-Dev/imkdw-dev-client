import Link from 'next/link';
import { Category } from '../../services/@types/category';
import CategoryImage from '../../components/category/CategoryImage';

interface Props extends Pick<Category, 'image' | 'name' | 'articleCount'> {}
export default function CategoryItem({ articleCount, image, name }: Props) {
  return (
    <li className="w-1/4 p-5">
      <Link href={`/categories/${name}`} className="flex items-center justify-center gap-4">
        <CategoryImage image={image} name={name} />
        <div>
          <h3>
            <b>Backend</b>
          </h3>
          <p className="text-sm">{articleCount} Articles</p>
        </div>
      </Link>
    </li>
  );
}
