import StudyDescription from '../../../features/study/components/main/StudyDescription';
import StudyHeader from '../../../features/study/components/main/StudyHeader';
import StudyNavigator from '../../../features/study/components/main/StudyNavigator';

interface Props {
  children: React.ReactNode;
}

export default function StduyLayout({ children }: Props) {
  return (
    <section className="w-full pt-[50px] mobile:px-2">
      <StudyHeader />
      <StudyDescription />
      <StudyNavigator />
      {children}
    </section>
  );
}
