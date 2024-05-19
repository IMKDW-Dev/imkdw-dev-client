export interface Category {
  id: string;
  name: string;
  desc: string;
  image: string;
  articleCount: number;
}

export interface GetCategoriesResponse {
  items: Category[];
}

export interface GetCategoryDetailResponse extends Category {}
