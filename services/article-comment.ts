import { HttpMethod } from '../enums/http-method.enum';
import { PostCreateArticleCommentBody } from './@types/article-comment';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postCreateArticleComment = (articleId: string, body: PostCreateArticleCommentBody) => {
  const url = `v1/articles/${articleId}/comments`;
  console.log(body);
  return callApi<any>({ url, method: HttpMethod.POST, body });
};
