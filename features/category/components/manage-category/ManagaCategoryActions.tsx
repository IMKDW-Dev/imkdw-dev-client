import { Category } from '../../../../services/@types/category';
import DeleteCategoryButton from './DeleteCategoryButton';
import UpdateCategoryButton from './UpdateCategoryButton';

interface Props {
  category: Category;
}
export default function ManageCategoryActions({ category }: Props) {
  return (
    <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform items-center justify-center gap-2">
      <UpdateCategoryButton category={category} />
      <DeleteCategoryButton category={category} />
    </div>
  );
}
