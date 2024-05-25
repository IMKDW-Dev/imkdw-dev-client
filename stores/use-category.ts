import { create } from 'zustand';
import { Category } from '../services/@types/category';

interface CategoryStore {
  isCreateCategory: boolean;
  newCategory: Category | null;
  updatedCategory: Category | null;
  deletedCategory: Category | null;
  setIsCreateCategory(data: boolean): void;
  setNewCategory(data: Category): void;
  setUpdatedCategory(data: Category): void;
  setDeletedCategory(data: Category): void;
}

const useCategory = create<CategoryStore>((set) => ({
  isCreateCategory: false,
  newCategory: null,
  updatedCategory: null,
  deletedCategory: null,
  setIsCreateCategory: (isCreateCategory) => set({ isCreateCategory }),
  setNewCategory: (newCategory) => set({ newCategory }),
  setUpdatedCategory: (updatedCategory) => set({ updatedCategory }),
  setDeletedCategory: (deletedCategory) => set({ deletedCategory }),
}));

export default useCategory;
