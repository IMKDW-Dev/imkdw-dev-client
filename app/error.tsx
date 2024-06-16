'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-8">
      <Image
        src="https://static.imkdw.dev/images/pepe-error.png"
        width={600}
        height={600}
        alt="404"
        className="rounded-md"
      />
      <h1 className="text-6xl font-bold">Internal Server Error</h1>
      <p className="text-2xl">Oops, something went wrong..</p>
      <Link href="/" className="rounded-md bg-danger p-4 font-bold text-white">
        BACK TO HOME
      </Link>
    </div>
  );
}
