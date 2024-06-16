import { HttpMethod, IHttpMethod } from '../../enums/http-method.enum';
import { toastErrorMessage } from './toastErorr';

interface CallApiParams {
  url: string;
  method: IHttpMethod;
  body?: any;
  accessToken?: string;
  contentType?: string;
}

const callCSRApi = async <T>(params: CallApiParams): Promise<T> => {
  const isFormData = params.body instanceof FormData;
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${params.url}`;
  const response = await fetch(url, {
    method: params.method,
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      ...(!isFormData && { 'Content-Type': 'application/json' }),
    },
    credentials: 'include',
    body: params.body instanceof FormData ? params.body : JSON.stringify(params.body),
  });

  const json = await response.json();
  if (response.status === 401 && response.statusText === 'Unauthorized') {
    const refrehTokenApi = 'v1/auth/refresh-token';
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${refrehTokenApi}`, {
      method: HttpMethod.POST,
      credentials: 'include',
    });

    if (refreshResponse.status === 201) {
      return callCSRApi<T>(params);
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

export default callCSRApi;
