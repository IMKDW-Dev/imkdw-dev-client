import { create } from 'zustand';
import { Category } from '../services/@types/category';

interface CategoryStore {
  isCreateCategory: boolean;
  newCategory: Category | null;
  setIsCreateCategory(data: boolean): void;
  setNewCategory(data: Category): void;
}

const useCategory = create<CategoryStore>((set) => ({
  isCreateCategory: false,
  newCategory: null,
  setIsCreateCategory: (isCreateCategory) => set({ isCreateCategory }),
  setNewCategory: (newCategory) => set({ newCategory }),
}));

export default useCategory;
