import { HttpMethod } from '../enums/http-method.enum';
import { GetCategoriesResponse } from './@types/category';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getCategories = (limit?: number) => {
  let url = 'v1/categories';

  if (limit) {
    url += `?limit=${limit}`;
  }

  return callApi<GetCategoriesResponse>({ url, method: HttpMethod.GET });
};
