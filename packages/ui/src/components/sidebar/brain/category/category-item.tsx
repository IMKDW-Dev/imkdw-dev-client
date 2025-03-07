'use client';

import { ReactNode } from 'react';
import { DropdownMenuItem } from '@/_shadcn';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/_shadcn/components/ui/dialog';
import { Button } from '@/_shadcn/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/_shadcn/components/ui/form';
import { Input } from '@/_shadcn/components/ui/input';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

interface Props {
  title: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  name: z.string().min(1, { message: '이름은 최소 1글자 이상이어야 합니다.' }),
});

export function CategoryItem({ title, isOpen, onOpenChange }: Props) {
  const t = useSafeTranslations('Sidebar');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Sidebar.Categories.Form.Name.Label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('Sidebar.Categories.Form.Name.Placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              {t('Sidebar.Categories.Form.Cancel')}
            </Button>
            <Button type="submit">{t('Sidebar.Categories.Form.Save')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
