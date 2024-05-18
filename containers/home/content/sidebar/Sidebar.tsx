import AboutMe from './AboutMe';
import RecentArticles from './recendArticles/RecentArticles';

export default function Sidebar() {
  return (
    <aside className="sticky top-[150px] flex flex-col gap-10">
      <AboutMe />
      <RecentArticles />
    </aside>
  );
}
