import Image from 'next/image';

interface Props {
  articleId: string;
}
export default function ArticleShare({ articleId }: Props) {
  return (
    <section className="flex w-full flex-col items-center justify-center border-t border-box pb-7">
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
          value={`https://imkdw.dev/article/${articleId}`}
          className="w-[80%] pl-5 pr-20 outline-none"
          readOnly
        />
        <button type="button" className="text- rounded-md bg-[#FF6481] p-3 text-sm text-white hover:bg-black">
          Copy Link
        </button>
      </div>
    </section>
  );
}
