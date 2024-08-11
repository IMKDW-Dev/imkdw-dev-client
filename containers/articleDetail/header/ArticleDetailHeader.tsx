import Image from 'next/image';
import { formatDate } from '../../../utils/date';

interface Props {
  title: string;
  createdAt: string;
}
export default function ArticleDetailHeader({ title, createdAt }: Props) {
  return (
    <header className="flex flex-col gap-6">
      <h1 className="text-center text-3xl mobile:text-xl">
        <b>{title}</b>
      </h1>
      <div className="flex justify-center gap-2 mobile:text-sm">
        <Image src="/images/icon/calendar.svg" width={18} height={18} alt="Calendar" />
        <b>Published: </b>
        <p>{formatDate(createdAt)}</p>
      </div>
    </header>
  );
}
