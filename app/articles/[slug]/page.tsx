import Image from 'next/image';
import Link from 'next/link';

export default function ArticleDetailPage() {
  return (
    <article className="flex w-full flex-col items-center gap-12 p-16 pl-[100px] pr-[100px]">
      {/* 게시글 내용 */}
      <section className="box-shadow flex w-full flex-col gap-8 rounded-lg border border-box bg-white p-8">
        {/* 게시글 상세 상단 */}
        <header className="flex flex-col gap-6">
          <h1 className="text-center text-3xl">
            <b>Welcome to IMKDW Dev</b>
          </h1>
          <p className="flex justify-center gap-2">
            <Image src="/images/icon/calendar.svg" width={18} height={18} alt="Calendar" />
            <b>Published: </b>
            <p>2024. 05. 18</p>
          </p>
        </header>

        {/* 광고 */}
        <section className="flex h-[150px] items-center justify-center rounded-xl bg-black text-center text-3xl text-white">
          Advertisement
        </section>

        {/* 게시글 내용 */}
        <section>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio quam, ad porro
          consectetur magni at nesciunt consequuntur atque eligendi? Ab nisi error dignissimos corporis, necessitatibus
          repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio
          quam, ad porro consectetur magni at nesciunt consequuntur atque eligendi? Ab nisi error dignissimos corporis,
          necessitatibus repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam amet
          dicta optio quam, ad porro consectetur magni at nesciunt consequuntur atque eligendi? Ab nisi error
          dignissimos corporis, necessitatibus repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Obcaecati aperiam amet dicta optio quam, ad porro consectetur magni at nesciunt consequuntur atque eligendi?
          Ab nisi error dignissimos corporis, necessitatibus repellendus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Obcaecati aperiam amet dicta optio quam, ad porro consectetur magni at nesciunt consequuntur
          atque eligendi? Ab nisi error dignissimos corporis, necessitatibus repellendus. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio quam, ad porro consectetur magni at nesciunt
          consequuntur atque eligendi? Ab nisi error dignissimos corporis, necessitatibus repellendus. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio quam, ad porro consectetur magni at
          nesciunt consequuntur atque eligendi? Ab nisi error dignissimos corporis, necessitatibus repellendus. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio quam, ad porro
          consectetur magni at nesciunt consequuntur atque eligendi? Ab nisi error dignissimos corporis, necessitatibus
          repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam amet dicta optio
          quam, ad porro consectetur magni at nesciunt consequuntur atque eligendi? Ab nisi error dignissimos corporis,
          necessitatibus repellendus. necessitatibus repellendus. necessitatibus repellendus. necessitatibus
          repellendus. necessitatibus repellendus. necessitatibus repellendus. necessitatibus repellendus.
          necessitatibus repellendus.
        </section>

        {/* 게시글 공유 */}
        <section className="flex w-full flex-col items-center justify-center border-t border-box pb-7">
          {/* SNS 공유 */}
          <div className="flex w-full justify-center gap-3 pb-6 pt-6">
            <b>Share Article : </b>
            <ul>
              <li>
                <button type="button">
                  <Image src="/images/icon/kakaotalk.png" width={24} height={24} alt="kakao" />
                </button>
              </li>
            </ul>
          </div>

          {/* 링크 복사 */}
          <div className="box-shadow flex w-[70%] justify-center rounded-md border border-box p-2">
            <input
              type="text"
              value="https://imkdw.dev/article/welcome-to-imkdw-dev"
              className="w-[80%] pl-5 pr-20 outline-none"
              readOnly
            />
            <button type="button" className="text- rounded-md bg-[#FF6481] p-3 text-sm text-white hover:bg-black">
              Copy Link
            </button>
          </div>
        </section>
      </section>

      {/* 이전/다음 게시글 */}
      <section className="flex w-full items-center justify-between">
        <div className="w-[45%]">
          <Link href="/articles/0" className="w-full">
            <div className="box-shadow flex gap-5 rounded-lg bg-[#8665f0] p-7 pl-0">
              <div className="flex w-[55px] items-center justify-center rounded-r-[100px] bg-white">
                <Image src="/images/icon/left.svg" width={24} height={24} alt="Left" />
              </div>
              <div className="text-white">
                <p>Previous Article</p>
                <b className="text-sm">Welcome to IMKDW Dev</b>
              </div>
            </div>
          </Link>
        </div>
        <div className="h-[50px] w-[2px] bg-[#FEEAEC]" />
        <div className="w-[45%]">
          <Link href="/articles/2">
            <div className="box-shadow flex w-full justify-end gap-5 rounded-lg bg-[#8665f0] p-7 pr-0">
              <div className="text-right text-white">
                <p>Previous Article</p>
                <b className="text-sm">Welcome to IMKDW Dev</b>
              </div>
              <div className="flex w-[55px] items-center justify-center rounded-l-[100px] bg-white">
                <Image src="/images/icon/right.svg" width={24} height={24} alt="Left" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 카테고리에 속한 다른 게시글들 */}
      <section className="box-shadow flex w-full flex-col gap-8 rounded-xl border border-box bg-white p-5">
        <div className="flex items-center justify-between gap-5">
          <div className="profile relative h-[70px] w-[70px] overflow-hidden rounded-[100px]">
            <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p>
              More in this <b>Category</b>
            </p>
            <h3 className="text-2xl">
              <b>Backend</b>
            </h3>
          </div>
          <button type="button" className="rounded-md bg-[#7e3f83] p-2 pl-4 pr-4 text-white hover:bg-black">
            View All Articles
          </button>
        </div>
        <ul className="flex w-full flex-col pl-5 pr-5">
          <li className="border-b border-box pb-3 pt-3">
            <Link href="/articles/1" className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-black text-white">
                <b>1</b>
              </div>
              <h3>
                <b>Lorem ipsum dolor sit amet consectetur adipisicing elit</b>
              </h3>
            </Link>
          </li>
          <li className="border-b border-box pb-3 pt-3">
            <Link href="/articles/1" className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-black text-white">
                <b>2</b>
              </div>
              <h3>
                <b>Lorem ipsum dolor sit amet consectetur adipisicing elit</b>
              </h3>
            </Link>
          </li>
          <li className="pb-3 pt-3">
            <Link href="/articles/1" className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-black text-white">
                <b>3</b>
              </div>
              <h3>
                <b>Lorem ipsum dolor sit amet consectetur adipisicing elit</b>
              </h3>
            </Link>
          </li>
        </ul>
      </section>

      {/* 댓글 목록 */}
      <section className="flex w-full flex-col gap-5 pt-10">
        <h3 className="text-xl">
          ✨ <b>Comments</b>
        </h3>
        <ul className="flex flex-col gap-10">
          <li className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="profile relative h-[52px] w-[52px] overflow-hidden rounded-[100px]">
                <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
              </div>
              <div>
                <div>
                  <b>imkdw</b> on 2024. 05. 18
                </div>
              </div>
            </div>
            <p className="pl-[63px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button
              type="button"
              className="ml-[63px] mt-4 rounded-md bg-[#FF6481] p-1 pl-4 pr-4 text-white hover:bg-black"
            >
              Reply
            </button>
          </li>
          <li className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="profile relative h-[52px] w-[52px] overflow-hidden rounded-[100px]">
                <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
              </div>
              <div>
                <div>
                  <b>imkdw</b> on 2024. 05. 18
                </div>
              </div>
            </div>
            <p className="pl-[63px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button
              type="button"
              className="ml-[63px] mt-4 rounded-md bg-[#FF6481] p-1 pl-4 pr-4 text-white hover:bg-black"
            >
              Reply
            </button>
          </li>
        </ul>
      </section>

      {/* 댓글 작성창 */}
      <section className="flex w-full flex-col items-start gap-3 pt-10">
        <h3>
          <b>Leave a Reply</b>
        </h3>
        <div className="w-full">
          <textarea
            className="box-shadow min-h-[150px] w-full resize-none rounded-md  border border-box p-5 outline-accent"
            placeholder="Comment"
          />
        </div>
        <button type="submit" className="rounded-md bg-[#FF6481] p-2 pl-5 pr-5 text-white hover:bg-black">
          Post Comment
        </button>
      </section>
    </article>
  );
}
