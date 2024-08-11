import { Category } from '@/services/@types/category';
import Select, { SingleValue } from 'react-select';

/**
 * 게시글 수정의 경우 초기 카테고리가 선택되어있음
 * 카테고리가 선택될때마다 변경되야함
 */
interface Props {
  categoryId: number | null;
  changeCategory: (categoryId: number) => void;
  categories: Category[];
}

export default function ArticleFormCategory({ categories, categoryId, changeCategory }: Props) {
  const options = categories.map((_category) => ({ value: _category.id, label: _category.name }));
  const currentOption = options.find((option) => option.value === categoryId) ?? null;

  const handleChange = (
    option: SingleValue<{
      value: number;
      label: string;
    }>,
  ) => {
    if (option?.value) {
      changeCategory(option.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        onChange={(option) => handleChange(option)}
        defaultValue={currentOption}
        options={options}
        styles={{
          control: (provided) => ({
            ...provided,
            boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.03)',
            width: '100%',
            borderRadius: '0.5rem',
            border: '1px solid #FEEAEC',
            padding: '1rem',
            fontSize: '1rem',
            lineHeight: '1.75rem',
          }),
        }}
      />
    </div>
  );
}
