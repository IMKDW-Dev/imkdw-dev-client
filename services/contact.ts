import { HttpMethod } from '../enums/http-method.enum';
import { PostCreateContactBody } from './@types/contact';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postCreateContact = (body: PostCreateContactBody) => {
  const url = 'v1/contacts';
  return callApi<void>({ method: HttpMethod.POST, url, body });
};
