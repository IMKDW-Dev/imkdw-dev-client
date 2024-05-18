'use client';

import Image from 'next/image';
import useUser from '../../../stores/use-user';
import GithubOAuth from './GithubOAuth';
import GoogleOAuth from './GoogleOAuth';

export default function Authencation() {
  const { reset, isLoggedIn } = useUser((state) => state);

  const handleLogout = () => reset();

  return isLoggedIn ? (
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
        <button
          type="button"
          className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-black"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button type="button" className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-red-600">
          Exit
        </button>
      </div>
    </div>
  ) : (
    <ul className="flex justify-center gap-10 pt-2">
      <li className="flex flex-col items-center justify-center gap-2 p-1">
        <GithubOAuth />
      </li>
      <li className="flex flex-col items-center justify-center gap-2 p-1">
        <GoogleOAuth />
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
  );
}
