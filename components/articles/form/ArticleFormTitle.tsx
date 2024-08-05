import { ChangeEvent } from 'react';

interface Props {
  value: string;
  changeValue: (value: string) => void;
}

export default function ArticleFormTitle({ value, changeValue }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Input Article's Title"
      className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
      value={value}
      onChange={handleChange}
    />
  );
}
