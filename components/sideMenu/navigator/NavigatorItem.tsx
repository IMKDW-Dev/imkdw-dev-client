import SideMenuNavigatorLink from './NavigatorLink';

interface Props {
  href: string;
  name: string;
}

export default function SideMenuNavigatorItem({ href, name }: Props) {
  return (
    <li className="border-b border-box p-4 text-xl hover:underline">
      <SideMenuNavigatorLink href={href} name={name} />
    </li>
  );
}
