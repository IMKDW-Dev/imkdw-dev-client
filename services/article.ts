import { HttpMethod } from '../enums/http-method.enum';
import {
  Article,
  GetArticlesQuery,
  GetArticlesReponse,
  PatchUpdateArticleBody,
  PostCreateArticleBody,
  PostCreateArticleResponse,
} from './@types/article';
import { callApi } from './api';
import callSSRApi from './api-client/ssr-api';

export const postCreateArticle = (body: PostCreateArticleBody) => {
  const url = 'v1/articles';

  const formData = new FormData();
  formData.append('id', body.id);
  formData.append('title', body.title);
  formData.append('categoryId', body.categoryId.toString());
  formData.append('content', JSON.stringify(body.content?.content));
  formData.append('visible', body.visible.toString());
  body.tags.forEach((tag) => formData.append('tags[]', tag));
  formData.append('thumbnail', body.thumbnail);
  body.images.map((image) => formData.append('images[]', image));

  return callApi<PostCreateArticleResponse>({ url, method: HttpMethod.POST, body: formData });
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

export const patchUpdateArticle = (articleId: string, body: PatchUpdateArticleBody) => {
  const url = `v1/articles/${articleId}`;

  const formData = new FormData();
  if (body?.title) formData.append('title', body.title);
  if (body?.categoryId) formData.append('categoryId', body.categoryId.toString());
  if (body?.content) formData.append('content', JSON.stringify(body.content.content));
  if (body?.visible) formData.append('visible', body.visible.toString());
  if (body?.tags && body.tags.length) body.tags.forEach((tag) => formData.append('tags[]', tag));
  if (body?.thumbnail) formData.append('thumbnail', body.thumbnail);
  if (body?.images && body.images.length) body.images.forEach((image) => formData.append('images[]', image));

  return callApi<Article>({ url, method: HttpMethod.PATCH, body: formData });
};
