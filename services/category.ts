import { HttpMethod } from '../enums/http-method.enum';
import { GetCategoriesResponse, GetCategoryDetailResponse } from './@types/category';
import { callApi } from './api';

export const getCategories = (limit?: number) => {
  let url = 'v1/categories';

  if (limit) {
    url += `?limit=${limit}`;
  }

  return callApi<GetCategoriesResponse>({ url, method: HttpMethod.GET });
};

export const getCategoryDetail = (name: string) => {
  const url = `v1/categories/${name}`;
  return callApi<GetCategoryDetailResponse>({ url, method: HttpMethod.GET });
};
