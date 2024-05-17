import Logo from '../common/Logo';
import HeaderMenu from './Menu';
import SearchArea from './SearchArea';
import './header.css';

export default function Header() {
  return (
    <header className="header border-box fixed flex h-[80px] w-full justify-center border-b bg-white">
      <div className="flex w-full max-w-[1200px] flex-row items-center justify-between">
        <SearchArea />
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}
