'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { postGoogleOAuth } from '../../../services/auth';
import useUser from '../../../stores/use-user';
import { getUserInfo } from '../../../services/user';

export default function GoogleAuthPage() {
  const [token, setToken] = useState('');
  const { setIsLoggedIn, setUserInfo } = useUser((state) => state);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = params.get('access_token');
    setToken(accessToken ?? '');
  }, []);

  useEffect(() => {
    const fetchGoogleOAuth = async () => {
      const authResult = await postGoogleOAuth(token);
      const userInfo = await getUserInfo(authResult.userId);

      setIsLoggedIn(true);
      setUserInfo({
        nickname: userInfo.nickname,
        profile: userInfo.profile,
        userId: userInfo.userId,
        role: userInfo.role,
      });
      router.push('/');
    };

    if (token) {
      fetchGoogleOAuth();
    }
  }, [setIsLoggedIn, setUserInfo, token]);

  return null;
}
