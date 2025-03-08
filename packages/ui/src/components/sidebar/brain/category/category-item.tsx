'use client';

import { DropdownMenuItem } from '@/_shadcn';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/_shadcn/components/ui/dialog';
import { Button } from '@/_shadcn/components/ui/button';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';
import { CategoryForm, CategoryFormValues } from './category-form';

interface CategoryItemProps {
  title: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (values: CategoryFormValues) => void;
}

export function CategoryItem({ title, isOpen, onOpenChange, onSubmit }: CategoryItemProps) {
  const t = useSafeTranslations('Sidebar');

  const handleSubmit = (values: CategoryFormValues) => {
    onSubmit?.(values);
    onOpenChange(false);
  };

  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer"
        onSelect={(event) => {
          event.preventDefault();
          onOpenChange(true);
        }}
      >
        {title}
      </DropdownMenuItem>

      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent onClick={(event) => event.stopPropagation()}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="pt-4">
            <CategoryForm onSubmit={handleSubmit} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              {t('Sidebar.Categories.Form.Cancel')}
            </Button>
            <Button type="submit" form="category-form">
              {t('Sidebar.Categories.Form.Save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
