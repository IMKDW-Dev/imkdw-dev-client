'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getCategories } from '../../../services/category';
import useEditArticle from '../../../stores/use-edit-article';

export default function CategorySelector() {
  const [options, setOptions] = useState<{ value: number; label: string }[]>([]);
  const { setCategoryId, data } = useEditArticle((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setOptions(response.categories.map((category) => ({ value: category.id, label: category.name })));
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full">
      <Select
        value={options.find((option) => option.value === data.categoryId) || null}
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
