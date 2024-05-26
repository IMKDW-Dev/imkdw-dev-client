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
