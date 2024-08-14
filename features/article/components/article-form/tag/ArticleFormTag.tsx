import { ChangeEvent, useState } from 'react';

interface Props {
  tags: string[];
  changeTags: (tags: string[]) => void;
}

export default function ArticleFormTag({ tags, changeTags }: Props) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const newTag = value.trim();
      if (newTag !== '' && !tags.includes(newTag)) {
        changeTags([...tags, newTag]);
        setValue('');
      }
    }
  };

  return (
    <input
      type="text"
      placeholder="게시글 태그 입력, Enter 또는 쉼표로 구분"
      className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
