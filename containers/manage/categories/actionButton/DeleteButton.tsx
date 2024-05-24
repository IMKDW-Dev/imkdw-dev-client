import Delete from '@mui/icons-material/Delete';
import { Category } from '../../../../services/@types/category';

interface Props extends Pick<Category, 'id'> {}
export default function ManageCategoryDeleteButton({ id }: Props) {
  return (
    <button type="button" className="text-gray-400 hover:text-gray-600">
      <Delete />
    </button>
  );
}
