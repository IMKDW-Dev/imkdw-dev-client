import { create } from 'zustand';
import { ArticleComment } from '../services/@types/article-comment';

interface ArticleCommentStore {
  newArticleComment: ArticleComment | null;
  setNewArticleComment(data: ArticleComment): void;
}

const useArticleComment = create<ArticleCommentStore>((set) => ({
  newArticleComment: null,
  setNewArticleComment: (newArticleComment) => set({ newArticleComment }),
}));

export default useArticleComment;
