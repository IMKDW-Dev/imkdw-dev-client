'use client';

import Image from 'next/image';

import useSidemenu from '../../stores/use-sidemenu';
import Authencation from './authentication/Authentication';
import SideMenuNavigator from './navigator/SideMenuNavigator';

export default function SideMenu() {
  const { isOpen, setIsOpen } = useSidemenu((state) => state);

  const handleMenu = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  const handleCloseSideMenu = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return isOpen ? (
    <div
      className="fixed left-0 top-0 z-[20] flex h-full w-full justify-end bg-black bg-opacity-30"
      onClick={handleCloseSideMenu}
      role="none"
    >
      <div className="z-[30] flex h-full w-[450px] flex-col items-center gap-10 bg-white opacity-100">
        {/* 닫기 버튼 */}
        <section className="flex w-full justify-end pr-0 pt-10">
          <button
            className="flex w-[50px] justify-center rounded-l-[100px] bg-[#FF6481] p-2"
            type="button"
            onClick={handleMenu}
          >
            <Image src="images/icon/close.svg" alt="close" width={24} height={24} />
          </button>
        </section>

        {/* 로고 */}
        {/* <section className="flex w-full flex-col items-center gap-1">
          <Logo width={150} height={150} />
          <p className="text-[11px]">Share Experience of Technology</p>
        </section> */}

        {/* 인증 */}
        <section className="flex w-full flex-col gap-5 p-10">
          <h3 className="text-2xl">
            ✨ <b>Authencation</b>
          </h3>
          <Authencation />
        </section>

        {/* 네비게이터 */}
        <SideMenuNavigator />
      </div>
    </div>
  ) : null;
}
