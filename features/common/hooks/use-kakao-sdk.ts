import { useState, useEffect } from 'react';

export default function useKakaoSDK() {
  const [kakao, setKakao] = useState<any>(null);

  useEffect(() => {
    const kakaoInitializer = () => {
      // TODO: 환경변수로 변경
      const KAKAO_JS_KEY = '0f838e18a0431482dd4373159ff37c8e';

      if (typeof window !== 'undefined') {
        const kakaoSdk = (window as any).Kakao;

        if (kakaoSdk?.isInitialized()) {
          kakaoSdk.init(KAKAO_JS_KEY);
        }

        setKakao(kakaoSdk);
      }
    };

    kakaoInitializer();
  }, []);

  return kakao;
}
