export const GetArticlesFilter = {
  LATEST: 'latest',
  POPULAR: 'popular',
} as const;
export type IGetArticlesFilter = (typeof GetArticlesFilter)[keyof typeof GetArticlesFilter];
