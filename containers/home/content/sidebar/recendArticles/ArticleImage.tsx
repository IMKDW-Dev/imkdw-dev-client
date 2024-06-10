import Image from 'next/image';

interface Props {
  image: string;
  title: string;
}

export default function RecentArticleImage({ image, title }: Props) {
  return (
    <div className="relative min-h-[100px] min-w-[100px] overflow-hidden rounded-md shadow-sm">
      <Image src={image} fill alt={`${title}'s thumbnail`} className="object-cover object-center" />
    </div>
  );
}
