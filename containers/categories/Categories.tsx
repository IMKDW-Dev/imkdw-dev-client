'use client';

import { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { Category } from '../../services/@types/category';
import { getCategories } from '../../services/category';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full pl-10 pr-10">
      <ul className="box-shadow flex flex-wrap rounded-xl border border-box bg-white pb-10 pt-10">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            image={category.image}
            articleCount={category.articleCount}
          />
        ))}
      </ul>
    </div>
  );
}
