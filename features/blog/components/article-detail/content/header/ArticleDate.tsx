import { formatDate } from '@/utils/date';
import Image from 'next/image';

interface Props {
  createdAt: string;
}

export default function ArticleDate({ createdAt }: Props) {
  return (
    <div className="flex justify-center gap-2 mobile:text-sm">
      <Image src="/images/icon/calendar.svg" width={18} height={18} alt="Calendar" />
      <b>Published: </b>
      <p>{formatDate(createdAt)}</p>
    </div>
  );
}
