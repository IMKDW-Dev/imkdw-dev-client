import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-8">
      <Image
        src="https://static.imkdw.dev/images/pepe-404.jpg"
        width={600}
        height={600}
        alt="404"
        className="rounded-md"
      />
      <h1 className="text-6xl font-bold">Page not found</h1>
      <p className="text-2xl">Unfortunately the page you are looking for is not available.</p>
      <Link href="/" className="rounded-md bg-danger p-4 font-bold text-white">
        BACK TO HOME
      </Link>
    </div>
  );
}
