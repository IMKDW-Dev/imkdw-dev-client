'use client';

import { useState } from 'react';
import { Pin, ChevronRight, File, Folder } from 'lucide-react';
import { ReactNode } from 'react';

interface SidebarMenu {
  name: string;
  icon: ReactNode;
  type: 'folder' | 'docs';
  children: SidebarMenu[];
}

interface MenuItemProps {
  menu: SidebarMenu;
  depth?: number;
}

function MenuItem({ menu, depth = 0 }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (menu.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <button
        onClick={handleToggle}
        className={`
          w-full flex items-center gap-2 p-2 text-sm text-gray-600
          hover:bg-gray-100 rounded-md
        `}
        style={{ paddingLeft: depth > 0 ? `${depth * 16}px` : undefined }}
      >
        {/* Menu Icon */}
        {menu.icon}

        {/* Menu Name */}
        <div>{menu.name}</div>

        {/* Menu Collapse Icon */}
        {menu.type === 'folder' && menu.children.length > 0 && <ChevronRight className="w-5 h-5 ml-auto" />}
      </button>

      {/* Menu Children */}
      {isOpen && menu.children.length > 0 && (
        <ul>
          {menu.children.map((childMenu) => (
            <MenuItem key={childMenu.name} menu={childMenu} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function SidebarMenu() {
  const generateRandomChildren = (depth: number = 0, maxDepth: number = 3): SidebarMenu[] => {
    if (depth >= maxDepth) return [];

    const childrenCount = Math.floor(Math.random() * 5); // 0-4 children
    const children: SidebarMenu[] = [];

    for (let i = 0; i < childrenCount; i++) {
      const isFolder = Math.random() < 0.3;

      children.push({
        name: isFolder
          ? `Folder ${Math.random().toString(36).substring(7)}`
          : `Document ${Math.random().toString(36).substring(7)}`,
        icon: isFolder ? <Folder size={22} /> : <File size={22} />,
        type: isFolder ? 'folder' : 'docs',
        children: isFolder ? generateRandomChildren(depth + 1, maxDepth) : [],
      });
    }

    return children;
  };

  const menus = Array.from(
    { length: 20 }, // Reduced to 20 items for better performance
    (_, index): SidebarMenu => ({
      name: `Folder ${index + 1}`,
      icon: <Folder size={22} />,
      type: 'folder',
      children: generateRandomChildren(),
    }),
  );

  menus.unshift({
    name: 'Pinned',
    icon: <Pin size={22} />,
    type: 'folder',
    children: [],
  });

  return (
    <section>
      <ul>
        {menus.map((menu) => (
          <MenuItem key={menu.name} menu={menu} />
        ))}
      </ul>
    </section>
  );
}
