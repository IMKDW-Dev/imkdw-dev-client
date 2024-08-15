import ArticleFormTagItem from './ArticleFormTagItem';

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
