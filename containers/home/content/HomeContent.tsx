import PopularArticles from './popularArticles/PopularArticles';
import Sidebar from './sidebar/Sidebar';

export default function HomeContent() {
  return (
    <section className="relative flex w-full gap-10 pl-2 pr-2">
      <div className="flex-1">
        <Sidebar />
      </div>
      <PopularArticles />
    </section>
  );
}
