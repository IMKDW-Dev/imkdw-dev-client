import RelationArticleItem from '@/features/blog/components/article-detail/relation-articles/RelationArticleItem';
import { Article } from '@/services/@types/article';

interface Props {
  articles: Article[];
}

export default function RelationArticleList({ articles }: Props) {
  return (
    <ul className="flex w-full flex-col px-3">
      {articles.map((article, index) => (
        <RelationArticleItem index={index + 1} article={article} key={article.id} />
      ))}
    </ul>
  );
}
