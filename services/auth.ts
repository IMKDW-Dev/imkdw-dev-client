import { HttpMethod } from '../enums/http-method.enum';
import { AuthResponse } from './@types/auth';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postGoogleOAuth = async (accessToken: string): Promise<AuthResponse> => {
  const url = 'v1/oauth/google';
  return callApi<AuthResponse>({ url, method: HttpMethod.POST, accessToken });
};

export const postGithubOAuth = async (code: string, redirectUri: string) => {
  const url = 'v1/oauth/github';
  return callApi<AuthResponse>({
    url,
    method: HttpMethod.POST,
    body: {
      code,
      redirectUri,
    },
  });
};

export const postKakaoOAuth = async (code: string, redirectUri: string) => {
  const url = 'v1/oauth/kakao';
  return callApi<AuthResponse>({
    url,
    method: HttpMethod.POST,
    body: {
      code,
      redirectUri,
    },
  });
};
