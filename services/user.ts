import { HttpMethod } from '../enums/http-method.enum';
import { GetUserInfoResponse, PatchUpdateUserInfoBody, User } from './@types/user';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (userId: string): Promise<GetUserInfoResponse> => {
  const url = `v1/users/${userId}`;
  return callApi<GetUserInfoResponse>({ url, method: HttpMethod.GET });
};

export const patchUpdateUserInfo = (userId: string, body: PatchUpdateUserInfoBody) => {
  const url = `v1/users/${userId}`;

  const formData = new FormData();
  if (body?.profileImage) {
    formData.append('profileImage', body.profileImage);
  }

  if (body?.nickname) {
    formData.append('nickname', body.nickname);
  }

  return callApi<User>({ url, method: HttpMethod.PATCH, body: formData });
};
