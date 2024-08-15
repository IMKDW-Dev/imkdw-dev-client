import Image from 'next/image';

interface Props {
  image: string;
  name: string;
}
export default function ManageBookImage({ image, name }: Props) {
  return (
    <div className="relative h-full w-[45%] overflow-hidden rounded-bl-lg rounded-tl-lg">
      <Image src={image} fill alt={`${name}'s image`} className="object-center" />
    </div>
  );
}
