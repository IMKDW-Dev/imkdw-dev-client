import { Book } from '../../../../services/@types/book';

interface Props {
  book: Book;
}
export default function ManageBookItem({ book }: Props) {
  return <li></li>;
}
