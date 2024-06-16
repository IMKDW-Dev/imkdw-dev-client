import { JSONContent } from '@tiptap/core';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CreateArticleStore {
  data: {
    id: string;
    title: string;
    content: JSONContent | null;
    tags: string[];
    categoryId: number | null;
    thumbnail: File | null;
    thumbnailUrl: string;
    isPublic: boolean;
    images: string[];
  };
  setId: (id: string) => void;
  setTitle: (title: string) => void;
  setContent: (content: JSONContent | null) => void;
  setTags: (tags: string[]) => void;
  setCategoryId: (categoryId: number) => void;
  setThumbnail: (thumbnail: File) => void;
  setThumbnailUrl: (thumbnailUrl: string) => void;
  setIsPublic: (isPublic: boolean) => void;
  setImages: (imageUrl: string) => void;
  reset: () => void;
}

const useCreateArticle = create(
  persist<CreateArticleStore>(
    (set) => ({
      data: {
        id: '',
        title: '',
        content: null,
        tags: [],
        categoryId: null,
        thumbnail: null,
        thumbnailUrl: '',
        isPublic: true,
        images: [],
      },
      setId: (id) => set((state) => ({ data: { ...state.data, id } })),
      setTitle: (title) => set((state) => ({ data: { ...state.data, title } })),
      setContent: (content) => set((state) => ({ data: { ...state.data, content } })),
      setTags: (tags) => set((state) => ({ data: { ...state.data, tags } })),
      setCategoryId: (categoryId) => set((state) => ({ data: { ...state.data, categoryId } })),
      setThumbnail: (thumbnail) => set((state) => ({ data: { ...state.data, thumbnail } })),
      setThumbnailUrl: (thumbnailUrl) => set((state) => ({ data: { ...state.data, thumbnailUrl } })),
      setIsPublic: (isPublic) => set((state) => ({ data: { ...state.data, isPublic } })),
      setImages: (imageUrl) =>
        set((state) => ({ data: { ...state.data, images: [...(state.data.images ?? []), imageUrl] } })),
      reset: () =>
        set(() => ({
          data: {
            id: '',
            title: '',
            content: null,
            tags: [],
            categoryId: null,
            thumbnail: null,
            thumbnailUrl: '',
            isPublic: false,
            images: [],
          },
        })),
    }),
    {
      name: 'articleCreateStore',
    },
  ),
);

export default useCreateArticle;
