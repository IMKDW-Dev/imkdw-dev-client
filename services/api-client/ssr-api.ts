'use server';

import { cookies } from 'next/headers';
import { IHttpMethod } from '../../enums/http-method.enum';
import { toastErrorMessage } from './toastErorr';

interface CallApiParams {
  url: string;
  method: IHttpMethod;
  body?: any;
  accessToken?: string;
  contentType?: string;
}

const callSSRApi = async <T>(params: CallApiParams): Promise<T> => {
  const isFormData = params.body instanceof FormData;
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${params.url}`;
  const response = await fetch(url, {
    method: params.method,
    headers: {
      ...(!isFormData && { 'Content-Type': 'application/json' }),
      Cookie: cookies().toString(),
    },
    body: params.body instanceof FormData ? params.body : JSON.stringify(params.body),
  });

  const json = await response.json();
  if (json?.errorCode) {
    toastErrorMessage(json.errorCode);
    const error = new Error();
    error.message = json.errorCode;
    throw error;
  }

  return json.data;
};

export default callSSRApi;
