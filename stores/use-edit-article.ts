import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EditArticleStore {
  data: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    categoryId: number | null;
    thumbnail: File | null;
    thumbnailUrl: string;
    isPublic: boolean;
  };
  setId: (id: string) => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setTags: (tags: string[]) => void;
  setCategoryId: (categoryId: number) => void;
  setThumbnail: (thumbnail: File) => void;
  setThumbnailUrl: (thumbnailUrl: string) => void;
  setIsPublic: (isPublic: boolean) => void;
  reset: () => void;
}

const useEditArticle = create(
  persist<EditArticleStore>(
    (set) => ({
      data: {
        id: '',
        title: '',
        content: '',
        tags: [],
        categoryId: null,
        thumbnail: null,
        thumbnailUrl: '',
        isPublic: false,
      },
      setId: (id) => set((state) => ({ data: { ...state.data, id } })),
      setTitle: (title) => set((state) => ({ data: { ...state.data, title } })),
      setContent: (content) => set((state) => ({ data: { ...state.data, content } })),
      setTags: (tags) => set((state) => ({ data: { ...state.data, tags } })),
      setCategoryId: (categoryId) => set((state) => ({ data: { ...state.data, categoryId } })),
      setThumbnail: (thumbnail) => set((state) => ({ data: { ...state.data, thumbnail } })),
      setThumbnailUrl: (thumbnailUrl) => set((state) => ({ data: { ...state.data, thumbnailUrl } })),
      setIsPublic: (isPublic) => set((state) => ({ data: { ...state.data, isPublic } })),
      reset: () =>
        set(() => ({
          data: {
            id: '',
            title: '',
            content: '',
            tags: [],
            categoryId: null,
            thumbnail: null,
            thumbnailUrl: '',
            isPublic: false,
          },
        })),
    }),
    {
      name: 'articleEditStore',
    },
  ),
);

export default useEditArticle;
