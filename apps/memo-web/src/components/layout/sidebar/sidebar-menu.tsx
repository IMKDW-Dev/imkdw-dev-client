'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';

interface SidebarMenu {
  name: string;
  icon: string;
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
          w-full flex items-center gap-2 p-2 text-sm
          hover:bg-gray-100 rounded-md
        `}
        style={{ paddingLeft: depth > 0 ? `${depth * 16}px` : undefined }}
      >
        {/* Menu Icon */}
        <Icon icon={menu.icon} className="w-5 h-5 text-gray-500" />

        {/* Menu Name */}
        <span>{menu.name}</span>

        {/* Menu Collapse Icon */}
        {menu.type === 'folder' && menu.children.length > 0 && (
          <Icon
            icon={isOpen ? 'material-symbols:expand-more' : 'material-symbols:chevron-right'}
            className="w-5 h-5 ml-auto"
          />
        )}
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
      const isFolder = Math.random() < 0.3; // 30% chance of being a folder

      children.push({
        name: isFolder
          ? `Folder ${Math.random().toString(36).substring(7)}`
          : `Document ${Math.random().toString(36).substring(7)}`,
        icon: isFolder ? 'material-symbols:folder-outline' : 'bx:file',
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
      icon: 'material-symbols:folder-outline',
      type: 'folder',
      children: generateRandomChildren(),
    }),
  );

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
