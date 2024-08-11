import { HttpMethod } from '../enums/http-method.enum';
import { Article, GetArticlesQuery, GetArticlesReponse, PostCreateArticleResponse } from './@types/article';
import { callApi } from './api';
import callSSRApi from './api-client/ssr-api';

export const postCreateArticle = (formData: FormData) => {
  const url = 'v1/articles';
  return callApi<PostCreateArticleResponse>({ url, method: HttpMethod.POST, body: formData });
};

export const patchUpdateArticle = (articleId: string, formData: FormData) => {
  const url = `v1/articles/${articleId}`;

  return callApi<Article>({ url, method: HttpMethod.PATCH, body: formData });
};

export const getArticleDetail = async (id: string) => {
  const url = `v1/articles/${id}`;
  return callSSRApi<Article>({ url, method: HttpMethod.GET });
};

export const getArticles = (query: GetArticlesQuery) => {
  let url = `v1/articles?sort=${query.sort}&limit=${query.limit}&page=${query.page}`;

  if (query?.categoryId) {
    url += `&categoryId=${query.categoryId}`;
  }

  if (query?.excludeId) {
    url += `&excludeId=${query.excludeId}`;
  }

  if (query?.search) {
    url += `&search=${query.search}`;
  }

  return callSSRApi<GetArticlesReponse>({ url, method: HttpMethod.GET });
};

export const patchAddViewCount = (articleId: string) => {
  const url = `v1/articles/${articleId}/view`;
  return callApi<void>({ url, method: HttpMethod.PATCH });
};

export const deleteArticle = (articleId: string) => {
  const url = `v1/articles/${articleId}`;
  return callApi<void>({ url, method: HttpMethod.DELETE });
};
