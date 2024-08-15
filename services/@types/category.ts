export interface Category {
  id: number;
  name: string;
  desc: string;
  image: string;
  sort: number;
  articleCount: number;
}

export interface GetCategoriesResponse {
  items: Category[];
}

export interface GetCategoryDetailResponse extends Category {}
