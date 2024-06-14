import useSidemenu from '../../../stores/use-sidemenu';

export default function SideMenuNavigator() {
  const { setIsOpen } = useSidemenu((state) => state);

  const handleCloseSideMenu = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <nav className="flex w-full flex-col gap-5 p-10 pt-0 mobile:p-5">
      <h3 className="text-2xl">
        ✨ <b>Navigators</b>
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="border-b border-box p-4 text-xl hover:underline">
          <a href="/" onClick={handleCloseSideMenu}>
            Home
          </a>
        </li>
        <li className="border-b border-box p-4 text-xl hover:underline mobile:hidden">
          <a href="/manage" onClick={handleCloseSideMenu}>
            Manage <span className="text-sm">(read-only)</span>
          </a>
        </li>
        <li className="border-b border-box p-4 text-xl hover:underline">
          <a href="/contact" onClick={handleCloseSideMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
