import Image from 'next/image';
import Link from 'next/link';

export default function CategoryArticleItem() {
  return (
    <li className="w-1/3 p-5">
      <div className="box-shadow flex flex-col gap-4 rounded-lg border border-box bg-white pb-5">
        <Link
          href="/articles/1"
          className="profile relative h-[250px] w-full overflow-hidden rounded-tl-xl rounded-tr-xl"
        >
          <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
          <div className="absolute left-0 top-5 rounded-r-[100px] bg-red-400 p-2 pl-5 pr-5 text-sm text-white">
            <b>Backend</b>
          </div>
        </Link>
        <div className="flex flex-col gap-3 p-2">
          <h3 className="text-center">
            <Link href="/articles/1">
              <b className="text-lg">Welcome to IMKDW Dev</b>
            </Link>
          </h3>
          <p className="line-clamp-3 overflow-hidden text-ellipsis text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi hic sapiente quasi necessitatibus quos
            nobis, tempora perferendis porro impedit eveniet odio voluptate blanditiis vel tempore! Natus porro aliquid
            doloremque sit!
          </p>
          <div className="flex justify-center gap-1">
            <Image src="/images/icon/eye.svg" width={20} height={20} alt="Eye" />
            <span className="ml-1 text-sm text-[#4D6385]">1,234 reads</span>
          </div>
        </div>
      </div>
    </li>
  );
}
