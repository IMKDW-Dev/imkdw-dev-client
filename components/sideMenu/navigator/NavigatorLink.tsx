'use client';

import useSidemenu from '../../../stores/use-sidemenu';

interface Props {
  href: string;
  name: string;
}

export default function SideMenuNavigatorLink({ href, name }: Props) {
  const { setIsOpen } = useSidemenu((state) => state);

  const handleCloseSideMenu = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <a href={href} onClick={handleCloseSideMenu}>
      {name}
    </a>
  );
}
