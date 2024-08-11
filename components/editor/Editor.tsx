import Tiptap from './tiptap/Tiptap';

interface Props {
  value: string;
  changeValue: (value: string) => void;
  uploadImage: (imageUrl: string) => void;
}

export default function Editor({ value, changeValue, uploadImage }: Props) {
  return <Tiptap value={value} changeValue={changeValue} uploadImage={uploadImage} />;
}
