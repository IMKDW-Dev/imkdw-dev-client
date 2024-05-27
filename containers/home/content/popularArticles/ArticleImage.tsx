import Image from 'next/image';
import { Article } from '../../../../services/@types/article';
import { Category } from '../../../../services/@types/category';

interface Props {
  article: Article;
  category: Category;
}
export default function PopularArticleImage() {
  return (
    <div className="relative h-[250px] w-[270px] overflow-hidden rounded-xl">
      <Image src={article.thumbnail} alt="Server" className="object-cover object-center" />
      <div className="absolute left-0 top-5 rounded-r-[100px] bg-red-400 p-2 pl-5 pr-5 text-sm text-white">
        <b>Backend</b>
      </div>
    </div>
  );
}
