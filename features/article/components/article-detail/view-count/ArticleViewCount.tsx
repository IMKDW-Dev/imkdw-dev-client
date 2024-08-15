'use client';

import { useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { addDays } from 'date-fns';

import { patchAddViewCount } from '../../../../../services/article';

interface Props {
  articleId: string;
}

export default function ArticleViewCount({ articleId }: Props) {
  useEffect(() => {
    const key = `viewed_${articleId}`;
    const cookie = getCookie(key);
    if (cookie) {
      return;
    }

    patchAddViewCount(articleId);
    const expires = addDays(new Date(), 1);
    setCookie(key, 'true', { expires });
  }, [articleId]);

  return null;
}
