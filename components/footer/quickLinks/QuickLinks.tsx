import Link from 'next/link';
import PrivacyPolicy from './PrivacyPolicy';

export default function QuickLinks() {
  return (
    <section className="mobile:w-full flex w-[30%] flex-col gap-4">
      <h3 className="w-full text-2xl">✨ Quick Links</h3>
      <ul className="mobile:pl-0 flex flex-col pl-8">
        <li className="border-b border-box p-2 pb-3 pt-3">
          <Link href="/" className="flex items-center justify-between hover:text-accent">
            <span className="text-lg">Home</span>
          </Link>
        </li>
        <li className="border-b border-box p-2 pb-3 pt-3">
          <Link href="/contact" className="flex items-center justify-between hover:text-accent">
            <span className="text-lg">Contact</span>
          </Link>
        </li>
        <PrivacyPolicy />
      </ul>
    </section>
  );
}
