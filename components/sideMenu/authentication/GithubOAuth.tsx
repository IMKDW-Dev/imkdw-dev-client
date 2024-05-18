import Image from 'next/image';

export default function GithubOAuth() {
  const O_AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';
  const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID;
  const GITHUB_OAUTH_REDIRECT_URI = process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI;

  const handleGithubOAuth = () => {
    const parameter = `?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_OAUTH_REDIRECT_URI}&scope=user`;
    window.location.href = O_AUTH_ENDPOINT + parameter;
  };

  return (
    <>
      <button type="button" onClick={handleGithubOAuth}>
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-xl">
          <Image src="/images/icon/github.png" layout="fill" alt="github" objectFit="cover" />
        </div>
      </button>
      <p>Github</p>
    </>
  );
}
