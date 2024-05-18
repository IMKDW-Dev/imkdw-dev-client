'use client';

import Image from 'next/image';
import useSidemenu from '../../stores/use-sidemenu';

export default function HeaderMenu() {
  const { isOpen, setIsOpen } = useSidemenu((state) => state);

  const handleMenu = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" onClick={handleMenu}>
      <Image src="/images/icon/menu.svg" width={32} height={32} alt="Menu" />
    </button>
  );
}
