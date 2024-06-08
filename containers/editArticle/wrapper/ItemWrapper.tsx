interface Props {
  title: string;
  children: React.ReactNode;
}
export default function ArticleCategoryFormItemWrapper({ title, children }: Props) {
  return (
    <div className="flex w-full flex-col gap-3 p-3">
      <p className="text-xl">{title}</p>
      {children}
    </div>
  );
}
