import Image from 'next/image';

interface Props {
  title: string;
  image: string;
}

export default function BookItemImage({ title, image }: Props) {
  return (
    <div className="relative h-3/4 w-full overflow-hidden rounded-t-lg border-b border-gray-300">
      <Image src={image} fill alt={`${title}'s image`} className="object-center" />
    </div>
  );
}
