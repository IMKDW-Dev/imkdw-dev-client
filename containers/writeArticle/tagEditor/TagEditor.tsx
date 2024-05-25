import React, { useState } from 'react';
import useCreateArticle from '../../../stores/use-create-article';

export default function TagEditor() {
  const {
    data: { tags },
    setTags,
  } = useCreateArticle((state) => state);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (newTag !== '' && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setInputValue('');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Input Article's Tags, Separated by Comma"
        className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
}
