import { IGetArticlesFilter } from '../enums/article.enum';
import { HttpMethod } from '../enums/http-method.enum';
import {
  Article,
  ArticleDetail,
  ArticleSummary,
  PostCreateArticleBody,
  PostCreateArticleResponse,
} from './@types/article';
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
  return callApi<ArticleDetail>({ url, method: HttpMethod.GET });
};

export const getArticles = (filter: IGetArticlesFilter, limit: number) => {
  const url = `v1/articles?filter=${filter}&limit=${limit}`;
  return callApi<ArticleSummary[]>({ url, method: HttpMethod.GET });
};