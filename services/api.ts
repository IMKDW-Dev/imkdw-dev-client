import { toast } from 'react-toastify';

import ERROR_MESSAGE from '../constants/error.constant';

import { HttpMethod, IHttpMethod } from '../enums/http-method.enum';

const toastErrorMessage = (errorCode: string) => {
  if (typeof window !== 'undefined') {
    const errorMessage = ERROR_MESSAGE[errorCode] ?? '일시적인 오류가 발생했습니다. 잠시후 다시 시도해주세요';
    toast.error(errorMessage);
  }
};

interface CallApiParams {
  url: string;
  method: IHttpMethod;
  body?: any;
  accessToken?: string;
  contentType?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const callApi = async <T>(params: CallApiParams): Promise<T> => {
  const isFormData = params.body instanceof FormData;
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${params.url}`;

  const response = await fetch(url, {
    method: params.method,
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      ...(!isFormData && { 'Content-Type': 'application/json' }),
    },
    credentials: 'include',
    body: isFormData ? params.body : JSON.stringify(params.body),
  });

  const json = await response.json();
  if (response.status === 401 && response.statusText === 'Unauthorized') {
    const refrehTokenApi = 'v1/auth/refresh-token';
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${refrehTokenApi}`, {
      method: HttpMethod.POST,
      credentials: 'include',
    });

    if (refreshResponse.status === 201) {
      return callApi<T>(params);
    }
  }

  if (json?.errorCode) {
    toastErrorMessage(json.errorCode);
    const error = new Error();
    error.message = json.errorCode;
    throw error;
  }

  return json.data;
};
