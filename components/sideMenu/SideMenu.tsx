'use client';

import Image from 'next/image';

import useSidemenu from '../../stores/use-sidemenu';
import Authencation from './authentication/Authentication';
import SideMenuNavigator from './navigator/SideMenuNavigator';
import useUser from '../../stores/use-user';
import { userRole } from '../../constants/user.constant';

export default function SideMenu() {
  const { isOpen, setIsOpen } = useSidemenu((state) => state);
  const { userInfo } = useUser((state) => state);

  const handleMenu = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  const handleCloseSideMenu = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return isOpen ? (
    <>
      <div
        className="fixed left-0 top-0 z-[20] flex h-full w-full justify-end bg-black bg-opacity-30"
        onClick={handleCloseSideMenu}
        role="none"
      />
      <div className="fixed right-0 z-[20] flex h-full w-[450px] flex-col items-center gap-5 bg-white opacity-100">
        {/* 닫기 버튼 */}
        <section className="flex w-full justify-end pr-0 pt-5">
          <button
            className="flex w-[50px] justify-center rounded-l-[100px] bg-[#FF6481] p-2"
            type="button"
            onClick={handleMenu}
          >
            <Image src="/images/icon/close.svg" alt="close" width={24} height={24} />
          </button>
        </section>
        {/* 인증 */}
        <section className="flex w-full flex-col gap-5 p-10">
          <h3 className="text-2xl">
            ✨ <b>Authencation</b>
          </h3>
          <Authencation />
        </section>

        {/* 관리자용 버튼 */}
        {userInfo.role === userRole.ADMIN && (
          <div className="flex">
            <a href="/articles/write" onClick={handleCloseSideMenu}>
              글쓰기
            </a>
          </div>
        )}

        {/* 네비게이터 */}
        <SideMenuNavigator />
      </div>
    </>
  ) : null;
}
