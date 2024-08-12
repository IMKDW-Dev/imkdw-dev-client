import ArticleDate from './ArticleDate';
import ArticleTitle from './ArticleTitle';

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
