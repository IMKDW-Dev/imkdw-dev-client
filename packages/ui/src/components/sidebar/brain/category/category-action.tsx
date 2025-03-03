import { Icon } from '@iconify/react';
import { CategoryItem } from './category-item';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, SidebarGroupAction } from '../../../../_shadcn';
import { cn } from '@/_shadcn/lib/utils';

export function CategoryAction() {
  const t = useSafeTranslations('Sidebar');

  return (
    <DropdownMenu>
      <SidebarGroupAction asChild>
        <DropdownMenuTrigger>
          <Icon icon="lucide:plus" />
        </DropdownMenuTrigger>
      </SidebarGroupAction>
      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={4}
        className="!bg-white dark:!bg-gray-900 border !border-gray-200 dark:!border-gray-800"
      >
        <CategoryItem title={t('Sidebar.Categories.Add')} />
        <CategoryItem title={t('Sidebar.Categories.Edit')} />
        <CategoryItem title={t('Sidebar.Categories.Delete')} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
