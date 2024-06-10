import { HttpMethod } from '../enums/http-method.enum';
import { GetArticleStatsCountResponse } from './@types/article-stats';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getArticleStatsCount = () => {
  const url = 'v1/articles/stats/count';
  return callApi<GetArticleStatsCountResponse>({ url, method: HttpMethod.GET });
};
