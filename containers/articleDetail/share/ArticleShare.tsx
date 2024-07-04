'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Article } from '../../../services/@types/article';
import { jsonContentToText } from '../../../utils/tiptap';

interface Props {
  article: Article;
}
export default function ArticleShare({ article }: Props) {
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
  const LINK = `${CLIENT_URL}/articles/${article.id}`;
  const { content, thumbnail, title } = article;

  const [kakao, setKakao] = useState<any>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const kakaoInitializer = () => {
      const KAKAO_JS_KEY = '0f838e18a0431482dd4373159ff37c8e';

      if (typeof window !== 'undefined') {
        const { Kakao } = window as any;
        setKakao(Kakao);

        if (!Kakao?.isInitialized()) {
          Kakao?.init(KAKAO_JS_KEY);
        }
      }
    };

    kakaoInitializer();
  }, []);

  const handleKakaoShare = () => {
    if (kakao) {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: jsonContentToText(content),
          imageUrl: thumbnail,
          link: {
            mobileWebUrl: LINK,
            webUrl: LINK,
          },
        },
        buttons: [
          {
            title: '이동하기',
            link: {
              mobileWebUrl: LINK,
              webUrl: LINK,
            },
          },
        ],
      });
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(LINK);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <section className="flex w-full flex-col items-center justify-center border-t border-box pb-7">
      <div className="flex w-full justify-center gap-3 pb-6 pt-6">
        <b>Share Article : </b>
        <ul>
          <li>
            <button type="button" onClick={handleKakaoShare}>
              <Image src="/images/icon/kakaotalk.png" width={24} height={24} alt="kakao" />
            </button>
          </li>
        </ul>
      </div>

      {/* 링크 복사 */}
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
    </section>
  );
}
