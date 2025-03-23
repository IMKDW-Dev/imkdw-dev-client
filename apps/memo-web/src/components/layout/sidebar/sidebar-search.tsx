'use client';

import { Icon } from '@iconify/react';

export function SidebarSearch() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 items-center bg-gray-100 p-2 px-2 border border-gray-300 rounded-md">
        <Icon icon="zondicons:search" className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 placeholder:text-gray-400 text-gray-600 outline-none text-sm"
        />
      </div>
    </div>
  );
}
