import React, { useState } from 'react';
import useEditArticle from '../../../stores/use-edit-article';

export default function TagEditor() {
  const { data, setTags } = useEditArticle((state) => state);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (newTag !== '' && !data.tags.includes(newTag)) {
        setTags([...data.tags, newTag]);
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
        disabled
      />
    </div>
  );
}
