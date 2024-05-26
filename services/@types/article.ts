import { Tag } from './tag';

export interface ArticleDetail {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  comments: ArticleCommentDetail[];
  thumbnail: string;
}

export interface PostCreateArticleBody {
  id: string;
  title: string;
  categoryId: number;
  content: string;
  visible: boolean;
  tags: string[];
  thumbnail: File;
}

export interface PostCreateArticleResponse {
  id: string;
}
