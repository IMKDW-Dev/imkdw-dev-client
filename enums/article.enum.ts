export const GetArticlesSort = {
  LATEST: 'latest',
  POPULAR: 'popular',
} as const;
export type IGetArticlesSort = (typeof GetArticlesSort)[keyof typeof GetArticlesSort];
