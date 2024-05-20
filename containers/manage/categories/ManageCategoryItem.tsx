import Image from 'next/image';
import CategoryImage from '../../../components/category/CategoryImage';
import { Category } from '../../../services/@types/category';

export default function ManageCategoryItem({ name, image, articleCount, desc }: Category) {
  return (
    <li className="flex w-full gap-5 rounded-sm p-3 hover:bg-[#f3f7f9]">
      <Image src="/images/icon/drag-indicator.svg" alt={name} width={30} height={30} />
      <div className="flex w-full">
        <div className="flex-2 bg-red-100- flex w-1/4 gap-4">
          <CategoryImage image={image} name={name} />
          <div className="flex flex-col justify-center pr-10">
            <h3 className="text-xl">
              <b>{name}</b>
            </h3>
            <p className="text-sm">{articleCount} Articles</p>
          </div>
        </div>
        <div className="flex flex-1 items-center">{desc}</div>
      </div>
    </li>
  );
}
