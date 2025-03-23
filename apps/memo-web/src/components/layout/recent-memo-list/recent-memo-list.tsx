import { MemoList } from './memo-list';
import { MemoListHeader } from './memo-list-header';
import { MemoListTabMenu } from './memo-list-tab-menu';

export function RecentMemoList() {
  return (
    <div className="flex flex-col shadow-primary bg-white rounded-lg">
      <div className="flex flex-col gap-2 p-4">
        <MemoListHeader />
        <MemoListTabMenu />
        <MemoList />
      </div>
    </div>
  );
}
