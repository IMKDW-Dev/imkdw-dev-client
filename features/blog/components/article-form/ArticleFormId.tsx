interface Props {
  id: string;
  changeId: (id: string) => void;
}

export default function ArticleFormId({ id, changeId }: Props) {
  return (
    <input
      type="text"
      placeholder="게시글 아이디를 입력해주세요"
      className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
      value={id}
      onChange={(event) => changeId(event.target.value)}
    />
  );
}
