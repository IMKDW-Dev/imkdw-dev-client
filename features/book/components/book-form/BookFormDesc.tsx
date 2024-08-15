interface Props {
  changeDesc: (desc: string) => void;
  desc: string;
}

export default function BookFormDesc({ changeDesc, desc }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-[14px] text-[#6C757D]">Description</p>
      <textarea
        value={desc}
        onChange={(event) => changeDesc(event.target.value)}
        className="resize-none rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
        placeholder="Don't stop using node.js"
      />
    </div>
  );
}
