import ProfileImage from '@/public/images/profile.jpg';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export function SidebarAuth() {
  return (
    <section className="pt-secondary flex justify-center gap-3">
      {/* Profile Image */}
      <div className="relative w-[40px] h-[40px] rounded-md shadow-primary">
        <Image src={ProfileImage} alt="profile" fill priority />
      </div>

      {/* Username */}
      <div className="flex flex-col justify-center flex-1">
        <span className="text-sm font-bold">imkdw</span>
      </div>

      {/* Auth Utils */}
      <button className="flex items-center gap-2 justify-end">
        <Icon icon="zondicons:cheveron-down" className="text-text-primary" />
      </button>
    </section>
  );
}
