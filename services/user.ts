import { HttpMethod } from '../enums/http-method.enum';
import { GetUserInfoResponse } from './@types/user';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (userId: string): Promise<GetUserInfoResponse> => {
  const url = `v1/users/${userId}`;
  return callApi<GetUserInfoResponse>({ url, method: HttpMethod.GET });
};
