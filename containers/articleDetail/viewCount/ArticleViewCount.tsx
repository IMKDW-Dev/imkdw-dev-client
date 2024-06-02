'use client';

import { useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { addDays } from 'date-fns';

import { Article } from '../../../services/@types/article';
import { patchAddViewCount } from '../../../services/article';

interface Props {
  article: Article;
}
export default function ArticleViewCount({ article }: Props) {
  useEffect(() => {
    const key = `viewed_${article.id}`;
    const cookie = getCookie(key);
    if (cookie) {
      return;
    }

    patchAddViewCount(article.id);
    const expires = addDays(new Date(), 1);
    setCookie(key, 'true', { expires });
  }, [article]);

  return null;
}
