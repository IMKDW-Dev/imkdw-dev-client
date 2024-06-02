import SideMenuNavigatorItem from './NavigatorItem';

const SIDE_MENU_ITEM = [
  {
    id: 1,
    href: '/',
    name: 'Home',
  },
  {
    id: 3,
    href: '/manage',
    name: 'Manage (readonly)',
  },
  {
    id: 4,
    href: '/contact',
    name: 'Contact',
  },
];

export default function SideMenuNavigator() {
  return (
    <nav className="flex w-full flex-col gap-5 p-10 pt-0">
      <h3 className="text-2xl">
        ✨ <b>Navigators</b>
      </h3>
      <ul className="flex flex-col gap-2">
        {SIDE_MENU_ITEM.map((item) => (
          <SideMenuNavigatorItem key={item.id} href={item.href} name={item.name} />
        ))}
      </ul>
    </nav>
  );
}
