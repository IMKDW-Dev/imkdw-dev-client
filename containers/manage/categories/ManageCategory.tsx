'use client';

import { useEffect, useState } from 'react';
import ManageCategoryItem from './ManageCategoryItem';
import { Category } from '../../../services/@types/category';
import { getCategories } from '../../../services/category';

export default function ManageCategory() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };

    fetchCategories();
  }, []);

  return (
    <ul className="flex w-full flex-col gap-5">
      {categories.map((category) => (
        <ManageCategoryItem
          key={category.id}
          name={category.name}
          image={category.image}
          articleCount={category.articleCount}
          desc={category.desc}
          id={category.id}
        />
      ))}
    </ul>
  );
}
