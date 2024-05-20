import { Metadata } from 'next';
import ManageSideMenu from '../../containers/manage/sideMenu/MangeSideMenu';
import generateCustomMetadata from '../../utils/metadata';

interface Props {
  readonly children: React.ReactNode;
}

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '블로그 관리',
    desc: '블로그를 관리하고 통계를 확인할 수 있는 페이지입니다.',
    link: 'https://imkdw.dev/manage',
  }),
};

export default function ManageLayout({ children }: Props) {
  return (
    <section className="relative flex w-full">
      <ManageSideMenu />
      <div className="w-full">{children}</div>
    </section>
  );
}
