import TiptapBold from '@/components/editor/tiptap/toolbar/Bold';
import TiptapCode from '@/components/editor/tiptap/toolbar/Code';
import TiptapHeading from '@/components/editor/tiptap/toolbar/Heading';
import TiptapImage from '@/components/editor/tiptap/toolbar/Image';
import TiptapLink from '@/components/editor/tiptap/toolbar/Link';
import TiptapOrderedList from '@/components/editor/tiptap/toolbar/OrderedList';
import TiptapQuote from '@/components/editor/tiptap/toolbar/Quote';
import TiptapUnderlined from '@/components/editor/tiptap/toolbar/Underlined';
import TiptapUnOrderedList from '@/components/editor/tiptap/toolbar/UnOrderedList';
import { Editor } from '@tiptap/react';

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
