interface Props {
  text: string;
}

export default function SideMenuSeparator({ text }: Props) {
  return <li className="p-3 pt-5 text-sm text-[#6C757D] opacity-60">{text}</li>;
}
