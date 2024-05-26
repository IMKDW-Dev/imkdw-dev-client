import { HttpMethod } from '../enums/http-method.enum';
import { PostCreateArticleBody, PostCreateArticleResponse } from './@types/article';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
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
