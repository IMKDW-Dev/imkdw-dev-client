import Image from 'next/image';
import Link from 'next/link';

interface Props {
  width: number;
  height: number;
}

export default function Logo({ width, height }: Props) {
  return (
    <Link href="/">
      <Image src="/images/logo.svg" alt="IMKDW DEV" width={width} height={height} />
    </Link>
  );
}
