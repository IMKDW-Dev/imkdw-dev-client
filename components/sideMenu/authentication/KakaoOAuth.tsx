import Image from 'next/image';

export default function KakaoOAuth() {
  const O_AUTH_ENDPOINT = 'https://kauth.kakao.com/oauth/authorize';
  const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID;
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
  const KAKAO_OAUTH_REDIRECT_URI = `${CLIENT_URL}/${process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI}`;

  const handleKakaoOAuth = () => {
    const parameter = `?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_OAUTH_REDIRECT_URI}&response_type=code`;
    window.location.href = O_AUTH_ENDPOINT + parameter;
  };

  return (
    <>
      <button type="button" onClick={handleKakaoOAuth}>
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
          <Image src="/images/icon/kakaotalk.png" alt="google" className="object-cover" fill />
        </div>
      </button>
      <p>Kakao</p>
    </>
  );
}
