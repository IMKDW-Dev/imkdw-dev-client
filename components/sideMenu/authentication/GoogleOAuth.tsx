import Image from 'next/image';

export default function GoogleOAuth() {
  const O_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
  const GOOGLE_OAUTH_REDIRECT_URI = `${CLIENT_URL}/${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}`;

  const handleGoogleOAuth = () => {
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    window.location.href = `${O_AUTH_ENDPOINT}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_OAUTH_REDIRECT_URI}&response_type=${responseType}&scope=${scope}`;
  };

  return (
    <>
      <button type="button" onClick={handleGoogleOAuth}>
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
          <Image src="/images/icon/google.png" alt="google" className="object-cover" fill />
        </div>
      </button>
      <p>Google</p>
    </>
  );
}
