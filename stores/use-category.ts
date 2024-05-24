import { create } from 'zustand';
import { Category } from '../services/@types/category';

interface CategoryStore {
  isCreateCategory: boolean;
  newCategory: Category | null;
  updatedCategory: Category | null;
  setIsCreateCategory(data: boolean): void;
  setNewCategory(data: Category): void;
  setUpdatedCategory(data: Category): void;
}

const useCategory = create<CategoryStore>((set) => ({
  isCreateCategory: false,
  newCategory: null,
  updatedCategory: null,
  setIsCreateCategory: (isCreateCategory) => set({ isCreateCategory }),
  setNewCategory: (newCategory) => set({ newCategory }),
  setUpdatedCategory: (updatedCategory) => set({ updatedCategory }),
}));

export default useCategory;
