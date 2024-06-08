import useEditArticle from '../../../stores/use-edit-article';

export default function TagList() {
  const { data } = useEditArticle((state) => state);

  return (
    <ul className="flex flex-wrap gap-2">
      {data.tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="flex items-center rounded-lg bg-gray-200 px-3 py-2">
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
}
