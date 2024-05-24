import { Category } from '../../../../services/@types/category';
import ManageCategoryDeleteButton from './DeleteButton';
import ManageCategoryUpdateButton from './UpdateButton';

interface Props {
  category: Category;
}
export default function ManageCategoryActions({ category }: Props) {
  return (
    <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform items-center justify-center gap-2">
      <ManageCategoryUpdateButton category={category} />
      <ManageCategoryDeleteButton category={category} />
    </div>
  );
}
