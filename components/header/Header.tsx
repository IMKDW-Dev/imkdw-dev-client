import clsx from 'clsx';
import { headers } from 'next/headers';

import Logo from '../common/Logo';
import HeaderMenu from './Menu';
import SearchArea from './SearchArea';
import { MANAGE_PAGE_PATH } from '../../constants/path.constant';
import { X_PATHNAME } from '../../constants/header.constants';

export default function Header() {
  const headerList = headers();
  const pathname = headerList.get(X_PATHNAME) || '';

  return (
    <header className="box-shadow fixed z-[10] flex h-[100px] w-full justify-center border-b border-box bg-white">
      <div
        className={clsx(
          'relative flex w-full flex-row items-center justify-between pl-10 pr-10',
          !pathname.includes(MANAGE_PAGE_PATH) && 'max-w-[1200px]',
        )}
      >
        <SearchArea />
        {/* move to center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo height={100} width={100} />
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
}
