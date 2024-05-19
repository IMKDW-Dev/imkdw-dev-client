export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  articleCount: number;
}

export interface GetCategoriesResponse {
  items: Category[];
}
