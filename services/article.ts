import { IGetArticlesSort } from '../enums/article.enum';
import { HttpMethod } from '../enums/http-method.enum';
import { Article, GetArticlesQuery, PostCreateArticleBody, PostCreateArticleResponse } from './@types/article';
import { callApi } from './api';

export const postCreateArticle = (body: PostCreateArticleBody) => {
  const url = 'v1/articles';

  const formData = new FormData();
  formData.append('id', body.id);
  formData.append('title', body.title);
  formData.append('categoryId', body.categoryId.toString());
  formData.append('content', body.content);
  formData.append('visible', body.visible.toString());
  body.tags.forEach((tag) => formData.append('tags[]', tag));
  formData.append('thumbnail', body.thumbnail);

  return callApi<PostCreateArticleResponse>({ url, method: HttpMethod.POST, body: formData });
};

export const getArticleDetail = async (id: string) => {
  const url = `v1/articles/${id}`;
  return callApi<Article>({ url, method: HttpMethod.GET });
};

export const getArticles = (query: GetArticlesQuery) => {
  let url = `v1/articles?sort=${query.sort}`;

  if (query?.limit) {
    url += `&limit=${query.limit}`;
  }

  if (query?.categoryId) {
    url += `&categoryId=${query.categoryId}`;
  }

  if (query?.excludeId) {
    url += `&excludeId=${query.excludeId}`;
  }

  return callApi<Article[]>({ url, method: HttpMethod.GET });
};

export const patchAddViewCount = (articleId: string) => {
  const url = `v1/articles/${articleId}/view`;
  return callApi<void>({ url, method: HttpMethod.PATCH });
};
