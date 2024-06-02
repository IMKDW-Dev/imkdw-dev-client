'use client';

import Image from 'next/image';
import useUser from '../../../stores/use-user';
import GithubOAuth from './GithubOAuth';
import GoogleOAuth from './GoogleOAuth';
import UserInfo from './UserInfo';
import AuthButtons from './AuthButtons';

export default function Authencation() {
  const { isLoggedIn } = useUser((state) => state);

  return isLoggedIn ? (
    <div className="box-shadow flex flex-col gap-5 rounded-xl border border-box p-3">
      <UserInfo />
      <AuthButtons />
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
            <Image src="/images/icon/kakaotalk.png" fill alt="kakao" className="object-cover" />
          </div>
        </button>
        <p>Kakao</p>
      </li>
    </ul>
  );
}
