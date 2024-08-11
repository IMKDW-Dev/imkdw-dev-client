import { useState, useEffect } from 'react';

export default function useKakaoSDK() {
  const [kakao, setKakao] = useState<any>(null);

  useEffect(() => {
    const kakaoInitializer = () => {
      // TODO: 환경변수로 변경
      const KAKAO_JS_KEY = '0f838e18a0431482dd4373159ff37c8e';

      if (typeof window !== 'undefined' && KAKAO_JS_KEY) {
        const { Kakao } = window as any;

        if (!Kakao.isInitialized()) {
          Kakao.init(KAKAO_JS_KEY);
        }

        setKakao(Kakao);
      }
    };

    kakaoInitializer();
  }, []);

  return kakao;
}
