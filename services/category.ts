import { HttpMethod } from '../enums/http-method.enum';
import { Category, GetCategoriesResponse, GetCategoryDetailResponse } from './@types/category';
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

export const postCreateCategory = (formData: FormData): Promise<Category> => {
  const url = 'v1/categories';
  return callApi({ url, method: HttpMethod.POST, body: formData });
};

export const patchUpdateCategory = (categoryId: number, formData: FormData): Promise<Category> => {
  const url = `v1/categories/${categoryId}`;
  return callApi({ url, method: HttpMethod.PATCH, body: formData });
};

export const deleteCategory = (categoryId: number) => {
  const url = `v1/categories/${categoryId}`;
  return callApi({ url, method: HttpMethod.DELETE });
};
