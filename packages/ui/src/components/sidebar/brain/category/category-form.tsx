import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/_shadcn/components/ui/form';
import { Input } from '@/_shadcn/components/ui/input';
import { useSafeTranslations } from '@imkdw-dev-client/i18n';

const formSchema = z.object({
  name: z.string().min(1, { message: '이름은 최소 1글자 이상이어야 합니다.' }),
});

export type CategoryFormValues = z.infer<typeof formSchema>;

interface CategoryFormProps {
  onSubmit: (values: CategoryFormValues) => void;
}

export function CategoryForm({ onSubmit }: CategoryFormProps) {
  const t = useSafeTranslations('Sidebar');

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  return (
    <Form {...form}>
      <form id="category-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
  );
}
