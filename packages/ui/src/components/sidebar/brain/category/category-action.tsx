'use client';

import { Icon } from '@iconify/react';
import { CategoryItem } from './category-item';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, SidebarGroupAction } from '../../../../_shadcn';
import { useState } from 'react';

const actions = {
  add: 'add',
  edit: 'edit',
  delete: 'delete',
} as const;

type ActionType = (typeof actions)[keyof typeof actions];

export function CategoryAction() {
  const t = useSafeTranslations('Sidebar');
  const [openDialog, setOpenDialog] = useState<ActionType | null>(null);

  return (
    <DropdownMenu>
      <SidebarGroupAction asChild>
        <DropdownMenuTrigger>
          <Icon icon="lucide:plus" className="cursor-pointer" />
        </DropdownMenuTrigger>
      </SidebarGroupAction>
      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={4}
        className="!bg-white dark:!bg-gray-900 border !border-gray-200 dark:!border-gray-800"
      >
        <CategoryItem
          title={t('Sidebar.Categories.Button.Add')}
          isOpen={openDialog === actions.add}
          onOpenChange={(open) => setOpenDialog(open ? actions.add : null)}
        />
        <CategoryItem
          title={t('Sidebar.Categories.Button.Edit')}
          isOpen={openDialog === actions.edit}
          onOpenChange={(open) => setOpenDialog(open ? actions.edit : null)}
        />
        <CategoryItem
          title={t('Sidebar.Categories.Button.Delete')}
          isOpen={openDialog === actions.delete}
          onOpenChange={(open) => setOpenDialog(open ? actions.delete : null)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
