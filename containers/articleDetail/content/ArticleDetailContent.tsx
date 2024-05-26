interface Props {
  content: string;
}
export default function ArticleDetailContent({ content }: Props) {
  // eslint-disable-next-line react/no-danger
  return <section suppressHydrationWarning dangerouslySetInnerHTML={{ __html: content }} />;
}
