'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ManagePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/manage/dashboards');
  }, [router]);

  return null;
}
