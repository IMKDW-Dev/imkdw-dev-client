import { ArticleCommentDetail } from './article-comment';
import { CategorySummary } from './category';
import { Tag } from './tag';

export interface ArticleSummary {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  viewCount: number;
  createdAt: string;
  category: CategorySummary;
  tags: Tag[];
}

export interface Article {
  id: string;
  title: string;
  categoryId: number;
  content: string;
  visible: true;
  thumbnail: string;
  viewCount: number;
  commentCount: number;
  createdAt: string;
  tags: Tag[];
}

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
