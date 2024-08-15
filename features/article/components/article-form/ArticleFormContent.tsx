import Editor from '../../../../components/editor/Editor';

interface Props {
  content: string;
  changeContent: (content: string) => void;
  uploadImage: (imageUrl: string) => void;
}

export default function ArticleFormContent({ content, changeContent, uploadImage }: Props) {
  return <Editor value={content} changeValue={changeContent} uploadImage={uploadImage} />;
}
