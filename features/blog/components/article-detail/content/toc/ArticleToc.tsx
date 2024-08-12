'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import getTocItems from '../../../../../../functions/toc.function';

interface Props {
  content: string;
}

export default function ArticleToc({ content }: Props) {
  const tocItems = getTocItems(content);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateAsideHeight = () => {
      if (asideRef.current) {
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight,
        );
        asideRef.current.style.height = `${documentHeight}px`;
      }
    };

    updateAsideHeight();
    window.addEventListener('resize', updateAsideHeight);
    window.addEventListener('load', updateAsideHeight);

    return () => {
      window.removeEventListener('resize', updateAsideHeight);
      window.removeEventListener('load', updateAsideHeight);
    };
  }, []);

  return (
    <aside ref={asideRef} className="absolute left-full w-[300px]">
      <section className="sticky top-[120px] max-h-[calc(100vh-120px)] overflow-y-auto mobile:hidden">
        <h3 className="border-b-2 border-[#FF6481]">In this Article</h3>
        <ul className="flex flex-col gap-4 pt-2">
          {tocItems.map((item) => {
            const paddingLeft = `pl-${(item.level - 2) * 4}`;
            return (
              <li key={item.id} className={clsx('line-clamp-1 hover:bg-[#FEEAEC]', paddingLeft)}>
                <a href={`#${item.id}`} className="text-lg">
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
