import AboutMe from './AboutMe';
import RecentArticles from './recendArticles/RecentArticles';

export default function Sidebar() {
  return (
    <aside className="sticky top-[150px] flex w-full flex-col gap-10">
      <AboutMe />
      <RecentArticles />
      <div className="flex h-[300px] items-center justify-center bg-black">
        {/* <HomeGoogleAd /> */}
        Advertisement
      </div>
    </aside>
  );
}
