import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { X_PATHNAME } from '../../constants/header.constants';

interface Props {
  width: number;
  height: number;
}

export default function Logo({ width, height }: Props) {
  const headerList = headers();
  const pathname = headerList.get(X_PATHNAME) || '';

  return pathname.includes('/manage') ? (
    <a href="/">
      <Image src="/images/logo.svg" alt="IMKDW DEV" width={width} height={height} />
    </a>
  ) : (
    <Link href="/">
      <Image src="/images/logo.svg" alt="IMKDW DEV" width={width} height={height} />
    </Link>
  );
}
