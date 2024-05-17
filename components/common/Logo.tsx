import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/logo.svg" alt="IMKDW DEV" width={100} height={100} />
    </Link>
  );
}
