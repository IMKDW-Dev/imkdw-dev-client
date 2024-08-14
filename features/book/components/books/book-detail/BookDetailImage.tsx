import Image from 'next/image';

interface Props {
  title: string;
  image: string;
}

export default function BookDetailImage({ title, image }: Props) {
  return (
    <div className="relative h-[200px] w-[150px] shadow-lg">
      <Image src={image} fill alt={`${title}'s image`} className="object-center" />
    </div>
  );
}
