'use client';

import { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useRouter, useSearchParams } from 'next/navigation';

import { Category } from '../../../../services/@types/category';
import { getCategories } from '../../../../services/category';

export default function ArticleManageHeaderCategorySelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const options = categories.map((category) => ({ value: category.id, label: category.name }));

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };
    fetchCategories();

    return () => setCategories([]);
  }, []);

  const handleChange = (optionItem: SingleValue<{ value: number; label: string }>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('categoryId', optionItem?.value.toString()!);

    const queryString = params.toString();
    const url = `/manage/articles?${queryString}`;

    router.push(url);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="category-selector">Category</label>
      <Select
        id="category-selector"
        options={options}
        onChange={handleChange}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: '0.375rem',
            border: '1px solid #D1D5DB',
            width: '200px',
          }),
        }}
        placeholder="Choose..."
      />
    </div>
  );
}
