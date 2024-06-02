import { HttpMethod } from '../enums/http-method.enum';
import { Category, GetCategoriesResponse, GetCategoryDetailResponse, PatchUpdateCategoryBody } from './@types/category';
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
  return callApi({ url, method: HttpMethod.POST, body: formData, contentType: 'multipart/form-data' });
};

export const patchUpdateCategory = (categoryId: number, body: PatchUpdateCategoryBody): Promise<Category> => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const url = `v1/categories/${categoryId}`;
  return callApi({ url, method: HttpMethod.PATCH, body: formData, contentType: 'multipart/form-data' });
};

export const deleteCategory = (categoryId: number) => {
  const url = `v1/categories/${categoryId}`;
  return callApi({ url, method: HttpMethod.DELETE });
};
