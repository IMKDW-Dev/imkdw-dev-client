import { Editor } from '@tiptap/react';
import TiptapHeading from './Heading';
import TiptapBold from './Bold';
import TiptapUnderlined from './Underlined';
import TiptapQuote from './Quote';
import TiptapCode from './Code';
import TiptapImage from './Image';
import TiptapUnOrderedList from './UnOrderedList';
import TiptapOrderedList from './OrderedList';
import TiptapLink from './Link';

interface Props {
  editor: Editor;
  uploadImage: (imageUrl: string) => void;
}
export default function Toolbar({ editor, uploadImage }: Props) {
  return (
    <div className="top-0 flex gap-5 border border-gray-200 bg-white p-4">
      <TiptapHeading editor={editor} level={2} />
      <TiptapHeading editor={editor} level={3} />
      <TiptapHeading editor={editor} level={4} />
      <TiptapBold editor={editor} />
      <TiptapUnderlined editor={editor} />
      <TiptapQuote editor={editor} />
      <TiptapCode editor={editor} />
      <TiptapImage editor={editor} uploadImage={uploadImage} />
      <TiptapUnOrderedList editor={editor} />
      <TiptapOrderedList editor={editor} />
      <TiptapLink editor={editor} />
    </div>
  );
}
