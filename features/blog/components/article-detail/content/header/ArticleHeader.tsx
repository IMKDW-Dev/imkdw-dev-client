import ArticleDate from '@/features/blog/components/article-detail/content/header/ArticleDate';
import ArticleTitle from '@/features/blog/components/article-detail/content/header/ArticleTitle';

interface Props {
  title: string;
  createdAt: string;
}

export default function ArticleHeader({ title, createdAt }: Props) {
  return (
    <header className="flex flex-col gap-6">
      <ArticleTitle title={title} />
      <ArticleDate createdAt={createdAt} />
    </header>
  );
}
