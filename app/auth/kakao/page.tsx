'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { postKakaoOAuth } from '../../../services/auth';
import useUser from '../../../stores/use-user';
import { getUserInfo } from '../../../services/user';

export default function KakaoAuthPage() {
  const { setIsLoggedIn, setUserInfo } = useUser((state) => state);
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? '';
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI ?? '';

  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
  const KAKAO_OAUTH_REDIRECT_URI = `${CLIENT_URL}/${process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI}`;

  useEffect(() => {
    const fetchKakaoOAuth = async () => {
      const authResult = await postKakaoOAuth(code, KAKAO_OAUTH_REDIRECT_URI);
      const userInfo = await getUserInfo(authResult.userId);

      setIsLoggedIn(true);
      setUserInfo({
        nickname: userInfo.nickname,
        profile: userInfo.profile,
        id: userInfo.id,
        role: userInfo.role,
      });
      router.push('/');
    };

    if (code) {
      fetchKakaoOAuth();
    }
  }, [KAKAO_OAUTH_REDIRECT_URI, code, redirectUri, router, setIsLoggedIn, setUserInfo]);

  return null;
}
