import Image from 'next/image';
import './introduce.css';

export default function Introduce() {
  return (
    <section className="mobile:flex-col-reverse mobile:gap-5 mobile:pt-[50px] flex w-full items-center justify-between pl-5 pr-5 pt-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="mobile:text-center text-3xl">
          Hey, I&apos;m <b className="text-accent">Dongwoo Kim</b> 😁
        </h1>
        <p className="mobile:text-center text-lg leading-loose">
          I&apos;m a <b>Backend Engineer</b> in Korea, I like to write about my experiences
          <br />
          This is my Tech blog, <b>IMKDW Dev</b>
          <br />
          Share my experiences and knowledge of <b>various technologies</b>
        </p>
      </div>
      <div className="mobile:h-[200px] mobile:w-[200px] relative h-[400px]  w-[400px] overflow-hidden rounded-[100px]">
        <Image
          src="/images/pepe-hacker.png"
          alt="profile"
          className="introduce-image object-centern object-cover"
          fill
        />
      </div>
    </section>
  );
}
