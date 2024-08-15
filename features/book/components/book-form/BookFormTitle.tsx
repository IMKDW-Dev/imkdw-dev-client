interface Props {
  changeTitle: (title: string) => void;
  title: string;
}

export default function BookFormTitle({ changeTitle, title }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-[14px] text-[#6C757D]">Name</p>
      <input
        type="text"
        placeholder="Backend"
        value={title}
        onChange={(event) => changeTitle(event.target.value)}
        className="rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
      />
    </div>
  );
}
