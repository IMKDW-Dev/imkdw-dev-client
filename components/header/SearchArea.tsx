import Image from 'next/image';

export default function SearchArea() {
  return (
    <button className="flex flex-row gap-2" type="button">
      <span>
        <Image src="/images/icon/search.svg" width={24} height={24} alt="Search" />
      </span>
      <span>Quick Search...</span>
    </button>
  );
}
