export interface Category {
  id: number;
  name: string;
  desc: string;
  image: string;
  articleCount: number;
}

export interface GetCategoriesResponse {
  items: Category[];
}

export interface GetCategoryDetailResponse extends Category {}
