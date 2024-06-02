import { create } from 'zustand';

interface SearchStore {
  isSearch: boolean;
  setIsSearch(isSearch: boolean): void;
}

const useSearch = create<SearchStore>((set) => ({
  isSearch: false,
  setIsSearch: (isSearch: boolean) => set({ isSearch }),
}));

export default useSearch;
