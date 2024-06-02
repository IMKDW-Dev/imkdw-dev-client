import { IGetArticlesSort } from '../../enums/article.enum';
import { ArticleComment } from './article-comment';
import { Category } from './category';
import { OffsetPagingQuery, OffsetPagingResponse } from './common';
import { Tag } from './tag';

export interface Article {
  id: string;
  title: string;
  content: string;
  visible: boolean;
  category: Category;
  thumbnail: string;
  viewCount: number;
  commentCount: number;
  createdAt: string;
  tags: Tag[];
  comments: ArticleComment[];
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

export interface GetArticlesReponse extends OffsetPagingResponse<Article> {}

export interface GetArticlesQuery extends OffsetPagingQuery {
  sort: IGetArticlesSort;
  categoryId?: number;
  excludeId?: string;
}
