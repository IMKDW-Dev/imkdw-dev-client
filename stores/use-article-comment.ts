import { create } from 'zustand';
import { ArticleCommentDetail } from '../services/@types/article-comment';

interface ArticleCommentStore {
  newArticleComment: ArticleCommentDetail | null;
  setNewArticleComment(data: ArticleCommentDetail): void;
}

const useArticleComment = create<ArticleCommentStore>((set) => ({
  newArticleComment: null,
  setNewArticleComment: (newArticleComment) => set({ newArticleComment }),
}));

export default useArticleComment;
