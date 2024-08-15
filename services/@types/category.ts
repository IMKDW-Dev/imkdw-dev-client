export interface Category {
  id: number;
  name: string;
  desc: string;
  image: string;
  sort: number;
  articleCount: number;
}

export interface GetCategoriesResponse {
  categories: Category[];
}

export interface GetCategoryDetailResponse extends Category {}
