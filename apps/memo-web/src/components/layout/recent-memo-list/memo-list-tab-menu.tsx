'use client';

import { cn } from '@imkdw-dev-client/utils';
import { useState } from 'react';

type TabType = 'all' | 'pinned';

interface TabMenuButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabMenuButton({ label, isActive, onClick }: TabMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn('flex justify-center items-center', isActive && 'border-b border-gray-600')}
    >
      <span className={cn(isActive ? 'text-gray-600' : 'text-gray-400')}>{label}</span>
    </button>
  );
}

export function MemoListTabMenu() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const handleTabClick = (tab: TabType) => setActiveTab(tab);

  return (
    <div className="flex gap-5">
      <TabMenuButton label="All" isActive={activeTab === 'all'} onClick={() => handleTabClick('all')} />
      <TabMenuButton label="Pinned" isActive={activeTab === 'pinned'} onClick={() => handleTabClick('pinned')} />
    </div>
  );
}
