// eslint-disable-next-line import/prefer-default-export
export const getBooks = async () => {
  const a = [];
  return {
    items: [
      {
        id: 'effective-typescript',
        title: '이펙티브 타입스크립트',
        description: '이벤트 메서드를 타입스크립트로 작성하는 방법'.repeat(3),
        image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
        progress: 50,
        pages: 100,
      },
      {
        id: 'object',
        title: '오브젝트',
        description: '오브젝트란 어떤 객체를 만들어주는 것인가?'.repeat(3),
        image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
        progress: 40,
        pages: 460,
      },
      {
        id: 'gak-sa-oh',
        title: '객제치향 사실과 오해',
        description: '객제치향 사실과 오해란?'.repeat(3),
        image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
        progress: 80,
        pages: 900,
      },
      {
        id: 'unit-test',
        title: '단위 테스트',
        description: '단위 테스트란?'.repeat(3),
        image: 'https://static.imkdw.dev/images/book_thumbnail.jpg',
        progress: 20,
        pages: 130,
      },
    ],
  };
};
