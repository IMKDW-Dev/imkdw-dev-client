export interface Category {
  id: number;
  name: string;
  desc: string;
  image: string;
  sort: number;
  articleCount: number;
}

export interface CategorySummary {
  id: number;
  name: string;
}

export interface GetCategoriesResponse {
  items: Category[];
}

export interface GetCategoryDetailResponse extends Category {}

export interface PatchUpdateCategoryBody extends Partial<Pick<Category, 'name' | 'desc' | 'sort'>> {
  image?: File;
}
