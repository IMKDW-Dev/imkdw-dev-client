import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="flex h-full w-full max-w-[1200px] flex-row justify-between">
        {/* Contact me 부분 */}
        <section className="flex w-[30%] flex-col gap-4">
          <h3 className="w-full text-2xl">✨ Contact me!</h3>
          <ul className="flex flex-col pl-8">
            <li className="border-box border-b p-2 pb-3 pt-3">
              <a href="" className="hover:text-accent flex items-center justify-between">
                <span className="text-lg">
                  Contact on <b>Github</b>
                </span>
                <span>
                  <Image src="/images/footer/github-mark.svg" width={30} height={30} alt="Github" />
                </span>
              </a>
            </li>
            <li className="border-box border-b p-2 pb-3 pt-3">
              <a href="" className="hover:text-accent flex items-center justify-between">
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
            <li className="border-box border-b p-2 pb-3 pt-3">
              <a href="" className="hover:text-accent flex items-center justify-between">
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="border-box border-b p-2 pb-3 pt-3">
              <a href="" className="hover:text-accent flex items-center justify-between">
                <span className="text-lg">Contact</span>
              </a>
            </li>
            <li className="border-box border-b p-2 pb-3 pt-3">
              <a href="" className="hover:text-accent flex items-center justify-between">
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
            <br /> You can check the source code on <b>GitHub</b>
            <br />
            <br />
            Also, if you have <b>any questions</b>
            <br />
            Please contact the information <b>included in the contact</b>
          </p>
        </section>
      </div>
    </footer>
  );
}
