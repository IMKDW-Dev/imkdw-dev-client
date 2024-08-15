import Link from 'next/link';

interface Props {
  text: string;
  link: string;
}
export default function ManageSideMenuItem({ text, link }: Props) {
  return (
    <li className="w-full p-3 pl-5 pr-5 hover:font-bold">
      <Link href={link}>{text}</Link>
    </li>
  );
}
