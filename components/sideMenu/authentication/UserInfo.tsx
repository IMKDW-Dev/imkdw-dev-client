'use client';

import Image from 'next/image';
import useUser from '../../../stores/use-user';

export default function UserInfo() {
  const { userInfo } = useUser((state) => state);

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
        <Image src={userInfo.profile} alt="github" className="object-cover" fill />
      </div>
      <div className="flex gap-1 text-lg">
        <p>Hello!</p>
        <b>{userInfo.nickname}</b>
      </div>
    </div>
  );
}
