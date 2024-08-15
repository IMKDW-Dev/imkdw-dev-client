import { create } from 'zustand';
import { Book } from '../../../services/@types/book';

interface BookStore {
  isCreateCategory: boolean;
  newBook: Book | null;
  updatedBook: Book | null;
  deletedBook: Book | null;
  setIsCreateBook(data: boolean): void;
  setNewBook(data: Book): void;
  setUpdatedBook(data: Book): void;
  setDeletedBook(data: Book): void;
}

const useBook = create<BookStore>((set) => ({
  isCreateCategory: false,
  newBook: null,
  updatedBook: null,
  deletedBook: null,
  setIsCreateBook: (isCreateCategory) => set({ isCreateCategory }),
  setNewBook: (newBook) => set({ newBook }),
  setUpdatedBook: (updatedBook) => set({ updatedBook }),
  setDeletedBook: (deletedBook) => set({ deletedBook }),
}));

export default useBook;
