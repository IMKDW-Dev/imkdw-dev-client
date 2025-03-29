'use client';

import { Search } from 'lucide-react';

export function SidebarSearch() {
  return (
    <div className="flex flex-col w-full p-2 bg-gray-100 border border-gray-300 rounded-md">
      <div className="flex gap-2 items-center">
        <Search className="text-gray-400" size={16} />
        <input type="text" placeholder="Search" className="text-gray-500 text-sm pt-[2px] outline-none" />
      </div>
    </div>
  );
}
