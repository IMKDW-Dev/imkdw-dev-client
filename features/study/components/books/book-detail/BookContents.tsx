import Link from 'next/link';

export default function BookContents() {
  const contents = [
    {
      chapter: 1,
      title: '타입스크립트 알아보기',
      children: [
        {
          title: '타입스크립트와 자바스크립트의 관계 이해하기',
        },
        {
          title: '타입스크립트 설정 이해하기',
        },
        {
          title: '코드 생성과 타입이 관계없음을 이해하기',
        },
        {
          title: '구조적 타이핑에 익숙해지기',
        },
      ],
    },
    {
      chapter: 2,
      title: '타입스크립트의 타입시스템',
      children: [
        {
          title: '편집기를 사용하여 타입 시스템 탐색하기',
        },
        {
          title: '타입이 값들의 집합이라고 생각하기',
        },
        {
          title: '타입 공간과 값 공간의 심벌 구분하기',
        },
      ],
    },
  ];

  return (
    <section className="flex w-full flex-col p-10">
      <h3 className="border-b border-gray-300 pb-1 text-4xl">Contents</h3>
      <ul className="flex flex-col gap-8 pt-10">
        {contents.map((content, parentIndex) => (
          <li key={content.chapter} className="border-b border-gray-300">
            <h2 className="pb-4 text-3xl font-bold">
              {parentIndex + 1}. {content.title}
            </h2>
            <ul>
              {content.children.map((_content, childIndex) => (
                <li key={_content.title} className="p-4">
                  <Link href={`/study/books/${_content.title}`}>
                    <h3 className="text-2xl">
                      {parentIndex + 1}-{childIndex + 1}. {_content.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
