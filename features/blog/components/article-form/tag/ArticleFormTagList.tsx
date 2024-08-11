import ArticleFormTagItem from '@/features/blog/components/article-form/tag/ArticleFormTagItem';
import Image from 'next/image';

interface Props {
  tags: string[];
  changeTags: (tags: string[]) => void;
}
export default function ArticleFormTagList({ tags, changeTags }: Props) {
  const handleRemoveTag = (tagToRemove: string) => {
    changeTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <ArticleFormTagItem key={tag} tag={tag} removeTag={handleRemoveTag} />
      ))}
    </ul>
  );
}
