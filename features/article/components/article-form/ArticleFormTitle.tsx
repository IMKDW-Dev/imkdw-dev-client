interface Props {
  title: string;
  changeTitle: (title: string) => void;
}

export default function ArticleFormTitle({ title, changeTitle }: Props) {
  return (
    <input
      type="text"
      placeholder="게시글 제목을 입력해주세요"
      className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
      value={title}
      onChange={(event) => changeTitle(event.target.value)}
    />
  );
}
