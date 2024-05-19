export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GetCategoriesResponse {
  items: Category[];
}
