import Image from 'next/image';
import useCreateArticle from '../../../stores/use-create-article';

export default function TagList() {
  const {
    data: { tags },
    setTags,
  } = useCreateArticle((state) => state);

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="flex items-center rounded-lg bg-gray-200 px-3 py-2">
          <span>{tag}</span>
          <button type="button" className="ml-2 text-gray-500 hover:text-gray-700" onClick={() => handleTagRemove(tag)}>
            <Image src="/images/icon/close-black.svg" alt="close icon" width={24} height={24} />
          </button>
        </li>
      ))}
    </ul>
  );
}
