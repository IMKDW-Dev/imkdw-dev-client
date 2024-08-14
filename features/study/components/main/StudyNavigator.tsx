'use client';

import { LiveTv, MenuBook } from '@mui/icons-material';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function StudyNavigator() {
  const pathname = usePathname();

  const DATA = [
    {
      name: 'Books',
      href: '/study/books',
      icon: MenuBook,
    },
    {
      name: 'Online Courses',
      href: '/study/online-courses',
      icon: LiveTv,
    },
  ];
  return (
    <ul className="flex border-b border-gray-200 pt-10">
      {DATA.map((data) => {
        const isActive = pathname === data.href;

        return (
          <li className={clsx('rounded-t-lg p-3 px-5', isActive && 'bg-[#FF6481] text-white')} key={data.name}>
            <Link href={data.href} className="flex items-center gap-2 text-xl ">
              <data.icon />
              {data.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
