import Image from 'next/image';
import CategoryArticles from '../../../containers/categoryArticles/CategoryArticles';

export default function CategoryDetailPage() {
  return (
    <section className="flex w-full flex-col items-center pl-5 pr-5 pt-[80px]">
      <header className="flex">
        <div className="flex items-center gap-3 border-r-2 border-box pr-10">
          <div className="profile relative h-[60px] w-[60px] overflow-hidden rounded-[100px] border border-box">
            <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">
              <b>Backend</b>
            </h1>
            <p className="text-sm">
              A collection of <b>9 articles</b>
            </p>
          </div>
        </div>
        <p className="pl-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Facilis laudantium illum id. Odit corrupti aliquam placeat dolorum
          <br />
          ad odio corporis pariatur atque autem dolorem laborum animi
        </p>
      </header>
      <CategoryArticles />
      <div className="pt-5">Page 1 of 1</div>
    </section>
  );
}
