import { Description, Person, Textsms, Visibility } from '@mui/icons-material';
import { getArticleStatsCount } from '../../../../services/article-stats';
import { getUserCount } from '../../../../services/user';

export default async function DashboardStatsCount() {
  const { totalArticles, totalComments, totalViews } = await getArticleStatsCount();
  const { userCount } = await getUserCount();

  return (
    <ul className="flex w-full justify-between gap-5">
      <li className="box-shadow flex w-1/4 justify-between rounded-md bg-white p-5">
        <div className="relative h-[70px] w-[70px] rounded-[100px] border border-[#7e73e1] bg-[#d9d5f6]">
          <Visibility
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            sx={{ color: '#7e73e1' }}
          />
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="text-lg font-bold">{totalViews} Views</p>
          <p className="text-sm text-[#98A6AD]">Total Views</p>
        </div>
      </li>
      <li className="box-shadow flex w-1/4 justify-between rounded-md bg-white p-5">
        <div className="relative h-[70px] w-[70px] rounded-[100px] border border-[#20be9f] bg-[#c6eee6]">
          <Description
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            sx={{ color: '#20be9f' }}
          />
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="text-lg font-bold">{totalArticles} Articles</p>
          <p className="text-sm text-[#98A6AD]">Total Articles</p>
        </div>
      </li>
      <li className="box-shadow flex w-1/4 justify-between rounded-md bg-white p-5">
        <div className="relative h-[70px] w-[70px] rounded-[100px] border border-[#61c9e9] bg-[#d0eff8]">
          <Textsms
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            sx={{ color: '#61c9e9' }}
          />
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="text-lg font-bold">{totalComments} Comments</p>
          <p className="text-sm text-[#98A6AD]">Total Comments</p>
        </div>
      </li>
      <li className="box-shadow flex w-1/4 justify-between rounded-md bg-white p-5">
        <div className="relative h-[70px] w-[70px] rounded-[100px] border border-[#f7c267] bg-[#fdedd2]">
          <Person
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            sx={{ color: '#f7c267' }}
          />
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="text-lg font-bold">{userCount} Users</p>
          <p className="text-sm text-[#98A6AD]">Total Users</p>
        </div>
      </li>
    </ul>
  );
}
