interface Props {
  /**
   * title of header
   */
  title: 'BRAIN' | 'BLOG';
}
export function Header({ title }: Props) {
  return (
    <header className="w-full">
      <div className="p-2">{title}</div>
    </header>
  );
}
