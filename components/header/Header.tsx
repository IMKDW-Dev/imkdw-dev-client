import Logo from '../common/Logo';
import HeaderMenu from './Menu';
import SearchArea from './SearchArea';

export default function Header() {
  return (
    <header className="box-shadow fixed z-[999] flex h-[100px] w-full justify-center border-b border-box bg-white">
      <div className="flex w-full max-w-[1200px] flex-row items-center justify-between pl-10 pr-10">
        <SearchArea />
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}
