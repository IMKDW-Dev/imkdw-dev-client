import Logo from '../../../components/common/Logo';
import ManageSideMenuItem from './SideMenuItem';
import SideMenuSeparator from './SideMenuSeparator';
import './style.css';

export default function ManageSideMenu() {
  return (
    <aside className="manage-side-menu sticky top-0 flex h-[100vh] w-[240px] flex-col items-center gap-5 bg-white p-3">
      <Logo height={100} width={100} />
      <ul className="h-full w-full">
        <SideMenuSeparator text="NAVIGATION" />
        <ManageSideMenuItem link="/manage/dashboards" text="Dashboards" />
        <SideMenuSeparator text="APPS" />
        <ManageSideMenuItem link="/manage/categories" text="Categories" />
        <ManageSideMenuItem link="/manage/articles" text="Articles" />
      </ul>
    </aside>
  );
}
