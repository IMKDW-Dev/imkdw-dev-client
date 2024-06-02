import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';

const DmSans = DM_Sans({ subsets: ['latin'] });

export default function Profile() {
  return (
    <div className="flex items-center gap-5">
      <div className="profile relative h-[70px] w-[70px] overflow-hidden rounded-[100px]">
        <Image src="/images/pepe-hacker.png" alt="Server" className="object-cover" fill />
      </div>
      <div className="flex flex-col">
        <b>Dongwoo Kim</b>
        <p className={clsx(DmSans.className, 'text-sm')}>Backend Engineer</p>
      </div>
    </div>
  );
}
