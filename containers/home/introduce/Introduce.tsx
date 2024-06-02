import Image from 'next/image';
import './introduce.css';

export default function Introduce() {
  return (
    <section className="flex w-full items-center justify-between pl-5 pr-5 pt-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl">
          Hey, I&apos;m <b className="text-accent">Dongwoo Kim</b> 😁
        </h1>
        <p className="text-lg leading-loose">
          I&apos;m a <b>Backend Engineer</b> in Korea, I like to write about my experiences
          <br />
          This is my Tech blog, <b>IMKDW Dev</b>
          <br />
          Share my experiences and knowledge of <b>various technologies</b>
        </p>
      </div>
      <div>
        <Image src="/images/pepe-hacker.png" alt="pepe" width={400} height={400} className="introduce-image" />
      </div>
    </section>
  );
}
