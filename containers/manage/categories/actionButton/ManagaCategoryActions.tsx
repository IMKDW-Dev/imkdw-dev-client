import UpdateCategoryButton from '../../../../features/category/components/UpdateCategoryButton';
import { Category } from '../../../../services/@types/category';
import ManageCategoryDeleteButton from './DeleteButton';

interface Props {
  category: Category;
}
export default function ManageCategoryActions({ category }: Props) {
  return (
    <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform items-center justify-center gap-2">
      <UpdateCategoryButton category={category} />
      <ManageCategoryDeleteButton category={category} />
    </div>
  );
}
