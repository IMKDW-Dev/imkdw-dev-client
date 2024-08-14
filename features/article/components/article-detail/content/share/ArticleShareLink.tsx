'use client';

import { useState } from 'react';

interface Props {
  articleId: string;
}
export default function ArticleShareLink({ articleId }: Props) {
  const LINK = `${process.env.NEXT_PUBLIC_CLIENT_URL}/articles/${articleId}`;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(LINK);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="box-shadow flex w-[70%] justify-between rounded-md border border-box p-2 pl-5 mobile:w-full mobile:pl-2">
      <input type="text" value={LINK} className="flex-1 overflow-hidden text-ellipsis px-2" readOnly />
      <button
        type="button"
        onClick={handleCopyLink}
        className="rounded-md bg-[#FF6481] p-3 text-sm text-white hover:bg-black"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
