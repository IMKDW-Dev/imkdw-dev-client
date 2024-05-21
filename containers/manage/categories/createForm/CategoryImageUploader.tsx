import Image from 'next/image';

export default function CategoryImageUploader() {
  return (
    <div className="profile relative h-[60px] w-[60px] overflow-hidden rounded-[100px]">
      <Image src="/images/pepe-hacker.png" fill alt="asd" className="object-cover object-center" />
    </div>
  );
}
