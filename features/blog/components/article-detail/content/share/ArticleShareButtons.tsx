'use client';

import useKakaoSDK from '@/features/common/hooks/use-kakao-sdk';
import { Article } from '@/services/@types/article';
import Image from 'next/image';

interface Props {
  article: Article;
}

export default function ArticleShareButtons({ article }: Props) {
  const LINK = `${process.env.NEXT_PUBLIC_CLIENT_URL}/articles/${article.id}`;
  const kakao = useKakaoSDK();

  // TODO: description 부분 HTML -> TEXT 변환
  const handleKakaoShare = () => {
    if (kakao) {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: article.title,
          description: article.content,
          imageUrl: article.thumbnail,
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

  return (
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
  );
}
