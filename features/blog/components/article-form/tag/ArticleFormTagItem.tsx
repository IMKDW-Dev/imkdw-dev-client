import Image from 'next/image';

interface Props {
  tag: string;
  removeTag: (tag: string) => void;
}

export default function ArticleFormTagItem({ tag, removeTag }: Props) {
  return (
    <li className="flex items-center rounded-lg bg-gray-200 px-3 py-2">
      <span>{tag}</span>
      <button type="button" className="ml-2 text-gray-500 hover:text-gray-700" onClick={() => removeTag(tag)}>
        <Image src="/images/icon/close-black.svg" alt="close icon" width={24} height={24} />
      </button>
    </li>
  );
}
