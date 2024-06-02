import { User } from './user';

export interface ArticleComment {
  id: number;
  articleId: string;
  content: string;
  author: User;
  parentId: number | null;
  replies: ArticleComment[];
  createdAt: string;
}

export interface PostCreateArticleCommentBody {
  parentId: number | null;
  content: string;
}
