'use client';

import { FormEvent, useState } from 'react';
import ArticleFormTitle from './ArticleFormTitle';
import ArticleFormCategorySelector from './ArticleFormCategorySelector';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ArticleFormTitle value={title} changeValue={handleChangeTitle} />
      <ArticleFormCategorySelector />
    </form>
  );
}
