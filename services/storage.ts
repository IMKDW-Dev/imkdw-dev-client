import { HttpMethod } from '../enums/http-method.enum';
import { GetUploadUrlResponse } from './@types/storage';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getUploadUrl = async (filename: string) => {
  const url = `v1/storage/upload-url?filename=${filename}`;
  return callApi<GetUploadUrlResponse>({ url, method: HttpMethod.GET });
};

export const postUploadFile = async (url: string, file: File) =>
  fetch(url, {
    method: HttpMethod.PUT,
    body: file,
    headers: {
      'Content-Type': 'image/*',
    },
  });
