'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getCategories } from '../../../services/category';
import { Category } from '../../../services/@types/category';
import useCreateArticle from '../../../stores/use-create-article';

export default function CategorySelector() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { setCategoryId } = useCreateArticle((state) => state);
  const options = categories.map((category) => ({ value: category.id, label: category.name }));

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full">
      <Select
        onChange={(option) => {
          if (option?.value) {
            setCategoryId(option.value);
          }
        }}
        options={options}
        styles={{
          control: (provided) => ({
            ...provided,
            boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.03)',
            width: '100%',
            borderRadius: '0.5rem',
            border: '1px solid #FEEAEC',
            padding: '1rem',
            fontSize: '1rem',
            lineHeight: '1.75rem',
          }),
        }}
      />
    </div>
  );
}
