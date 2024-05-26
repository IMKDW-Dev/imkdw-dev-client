export interface ArticleCommentDetail {
  id: number;
  replies: any[];
  author: {
    nickname: string;
    profile: string;
  };
  content: string;
  createdAt: string;
}

export interface PostCreateArticleCommentBody {
  parentId: number | null;
  content: string;
}
