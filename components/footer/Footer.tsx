import Image from 'next/image';
import Link from 'next/link';
import QuickLinks from './quickLinks/QuickLinks';
import TopButton from './TopButton';

export default function Footer() {
  return (
    <footer className="relative mt-[50px] flex w-full flex-col items-center justify-center gap-10 border-t border-box pl-5 pr-5 pt-[50px]">
      <div className="mobile:flex-col mobile:gap-10 flex h-full w-full max-w-[1200px] flex-row justify-between">
        {/* Contact me 부분 */}
        <section className="mobile:w-full flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ Contact me!</h3>
          <ul className="mobile:pl-0 flex flex-col pl-8">
            <li className="border-b border-box p-2 pb-3 pt-3">
              <Link
                href="https://github.com/imkdw"
                target="_blank"
                className="flex items-center justify-between hover:text-accent"
              >
                <span className="text-lg">
                  Contact on <b>Github</b>
                </span>
                <span>
                  <Image src="/images/footer/github-mark.svg" width={30} height={30} alt="Github" />
                </span>
              </Link>
            </li>
            <li className="border-b border-box p-2 pb-3 pt-3">
              <Link
                href="https://www.instagram.com/woo_dong_99/"
                target="_blank"
                className="flex items-center justify-between hover:text-accent"
              >
                <span className="text-lg">
                  Contact on <b>Instagram</b>
                </span>
                <span>
                  <Image src="/images/footer/instagram-mark.png" width={30} height={30} alt="Github" />
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <QuickLinks />

        {/* 블로그 소개 */}
        <section className="mobile:w-full flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ My Blog is...</h3>
          <p className="mobile:text-center ">
            This blog is an <b>open-source</b> technology blog
            <br /> You can check the source code on{' '}
            <Link href="https://github.com/IMKDW-Dev" target="_blank">
              <b>GitHub</b>
            </Link>
            <br />
            <br />
            Also, if you have <b>any questions</b>
            <br />
            Contact the information <b>included in the contact</b>
          </p>
        </section>
      </div>

      {/* 테마 저작권 */}
      <div className="flex flex-col gap-3 p-3">
        <p>Copyright 2024. IMKDW. All rights reserved.</p>
        <p className="text-center">
          Theme reference by{' '}
          <Link href="https://estudiopatagon.com/projects/zento-for-wordpress/?ref=zento-wp-footer" target="_blank">
            <b>Zento</b>
          </Link>
        </p>
      </div>

      <TopButton />
    </footer>
  );
}
