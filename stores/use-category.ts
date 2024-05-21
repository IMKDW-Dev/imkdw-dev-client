import { create } from 'zustand';

interface CategoryStore {
  isCreateCategory: boolean;
  setIsCreateCategory(data: boolean): void;
}

const useCategory = create<CategoryStore>((set) => ({
  isCreateCategory: false,
  setIsCreateCategory: (isCreateCategory) => set({ isCreateCategory }),
}));

export default useCategory;
