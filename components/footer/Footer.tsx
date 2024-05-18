import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-[50px] flex w-full flex-col items-center justify-center gap-10 border-t border-box pl-5 pr-5 pt-[50px]">
      <div className="flex h-full w-full max-w-[1200px] flex-row justify-between">
        {/* Contact me 부분 */}
        <section className="flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ Contact me!</h3>
          <ul className="flex flex-col pl-8">
            <li className="border-b border-box p-2 pb-3 pt-3">
              <a href="" className="flex items-center justify-between hover:text-accent">
                <span className="text-lg">
                  Contact on <b>Github</b>
                </span>
                <span>
                  <Image src="/images/footer/github-mark.svg" width={30} height={30} alt="Github" />
                </span>
              </a>
            </li>
            <li className="border-b border-box p-2 pb-3 pt-3">
              <a href="" className="flex items-center justify-between hover:text-accent">
                <span className="text-lg">
                  Contact on <b>Instagram</b>
                </span>
                <span>
                  <Image src="/images/footer/instagram-mark.png" width={30} height={30} alt="Github" />
                </span>
              </a>
            </li>
          </ul>
        </section>

        {/* Quick Links 부분 */}
        <section className="flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ Quick Links</h3>
          <ul className="flex flex-col pl-8">
            <li className="border-b border-box p-2 pb-3 pt-3">
              <a href="" className="flex items-center justify-between hover:text-accent">
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="border-b border-box p-2 pb-3 pt-3">
              <a href="" className="flex items-center justify-between hover:text-accent">
                <span className="text-lg">Contact</span>
              </a>
            </li>
            <li className="border-b border-box p-2 pb-3 pt-3">
              <a href="" className="flex items-center justify-between hover:text-accent">
                <span className="text-lg">Privacy Policy</span>
              </a>
            </li>
          </ul>
        </section>

        {/* 블로그 소개 */}
        <section className="flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ My Blog is...</h3>
          <p>
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
          <a href="https://estudiopatagon.com/projects/zento-for-wordpress/?ref=zento-wp-footer" target="_blank">
            <b>Zento</b>
          </a>
        </p>
      </div>
    </footer>
  );
}
