'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { MANAGE_PAGE_PATH } from '../../../constants/path.constant';
import useSidemenu from '../../../stores/use-sidemenu';

interface Props {
  href: string;
  name: string;
}

export default function SideMenuNavigatorLink({ href, name }: Props) {
  const pathname = usePathname();

  const { setIsOpen } = useSidemenu((state) => state);

  const handleCloseSideMenu = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return pathname.includes(MANAGE_PAGE_PATH) ? (
    <Link href={href} onClick={handleCloseSideMenu}>
      {name}
    </Link>
  ) : (
    <a href={href}>{name}</a>
  );
}
