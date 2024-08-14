interface Props {
  changeName: (name: string) => void;
  name: string;
}

export default function CategoryFormName({ changeName, name }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-[14px] text-[#6C757D]">Name</p>
      <input
        type="text"
        placeholder="Backend"
        value={name}
        onChange={(event) => changeName(event.target.value)}
        className="rounded-md border border-[#dee2e6] p-2 placeholder:text-sm"
      />
    </div>
  );
}
