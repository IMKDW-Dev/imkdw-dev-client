import Image from 'next/image';

interface Props {
  image: string;
  name: string;
}
export default function CategoryImage({ image, name }: Props) {
  return (
    <div className="profile relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
      <Image src={image} fill alt={`${name}'s image`} className="object-cover object-center" />
    </div>
  );
}
