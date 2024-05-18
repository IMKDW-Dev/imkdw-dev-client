'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../common/Logo';
import useUser from '../../stores/use-user';
import useSidemenu from '../../stores/use-sidemenu';

export default function SideMenu() {
  const { isLoggedIn } = useUser((state) => state);
  const { isOpen, setIsOpen } = useSidemenu((state) => state);

  const handleMenu = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="fixed left-0 top-0 z-[20] flex h-full w-full justify-end bg-black bg-opacity-30">
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
        <section className="flex w-full flex-col items-center gap-1">
          <Logo width={150} height={150} />
          <p className="text-[11px]">Share Experience of Technology</p>
        </section>

        {/* 인증 */}
        <section className="flex w-full flex-col gap-5 p-10">
          <h3 className="text-2xl">
            ✨ <b>Authencation</b>
          </h3>
          {!isLoggedIn && (
            <ul className="flex justify-center gap-10 pt-2">
              <li className="flex flex-col items-center justify-center gap-2 p-1">
                <button type="button">
                  <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
                    <Image src="/images/icon/github.png" layout="fill" alt="github" objectFit="cover" />
                  </div>
                </button>
                <p>Github</p>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 p-1">
                <button type="button">
                  <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
                    <Image src="/images/icon/google.png" layout="fill" alt="google" objectFit="cover" />
                  </div>
                </button>
                <p>Google</p>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 p-1">
                <button type="button">
                  <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
                    <Image src="/images/icon/kakaotalk.png" layout="fill" alt="kakao" objectFit="cover" />
                  </div>
                </button>
                <p>Kakao</p>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <div className="box-shadow flex flex-col gap-5 rounded-xl border border-box p-3">
              <div className="flex items-center gap-3">
                <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
                  <Image src="/images/pepe-hacker.png" layout="fill" alt="github" objectFit="cover" />
                </div>
                <p>
                  Welcome to my Blog, <b>IMKDW</b>
                </p>
              </div>
              <div className="flex justify-center gap-10">
                <button type="button" className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-black">
                  Change name
                </button>
                <button type="button" className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-black">
                  Logout
                </button>
                <button type="button" className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-red-600">
                  Exit
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 네비게이터 */}
        <nav className="flex w-full flex-col gap-5 p-10 pt-0">
          <h3 className="text-2xl">
            ✨ <b>Navigators</b>
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="border-b border-box p-4 text-xl hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b border-box p-4 text-xl hover:underline">
              <Link href="/">Articles</Link>
            </li>
            <li className="border-b border-box p-4 text-xl hover:underline">
              <Link href="/">
                Manage <b className="text-xs">(Read-only)</b>
              </Link>
            </li>
            <li className="border-b border-box p-4 text-xl hover:underline">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ) : null;
}
