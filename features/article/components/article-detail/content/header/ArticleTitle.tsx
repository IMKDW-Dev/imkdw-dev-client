interface Props {
  title: string;
}

export default function ArticleTitle({ title }: Props) {
  return (
    <h1 className="text-center text-3xl mobile:text-xl">
      <b>{title}</b>
    </h1>
  );
}
