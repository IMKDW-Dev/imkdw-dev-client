import Image from 'next/image';

export default function HeaderMenu() {
  return (
    <button>
      <Image src="/images/icon/menu.svg" width={32} height={32} alt="Menu" />
    </button>
  );
}
