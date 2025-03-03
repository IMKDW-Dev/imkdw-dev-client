import { DropdownMenuItem } from '../../../../_shadcn';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';
import { cn } from '@/_shadcn/lib/utils';

interface Props {
  title: string;
}
export function CategoryItem({ title }: Props) {
  const t = useSafeTranslations('Sidebar');

  return (
    <DropdownMenuItem className="cursor-pointer !bg-white dark:!bg-gray-900 hover:!bg-gray-100 focus:!bg-gray-100 dark:hover:!bg-gray-800 dark:focus:!bg-gray-800">
      <span>{title}</span>
    </DropdownMenuItem>
  );
}
