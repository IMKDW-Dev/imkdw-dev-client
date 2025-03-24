import { cn } from '@imkdw-dev-client/utils';
import { FC } from 'react';
import { Ellipsis, Eye, Calendar } from 'lucide-react';

interface MemoItemProps {
  title: string;
  content: string;
  views: number;
  date: string;
  color: string;
}

const MemoItem: FC<MemoItemProps> = ({ title, content, views, date, color }) => {
  return (
    <div
      className={cn(
        'flex flex-col bg-white shadow-primary rounded-lg p-4 gap-4 cursor-pointer hover:bg-gray-100 border-b-4',
      )}
      style={{ borderColor: color }}
    >
      <div className="flex justify-between">
        <h3>{title}</h3>
        <button>
          <Ellipsis className="text-gray-400" width={24} height={24} />
        </button>
      </div>
      <p className="text-gray-400 line-clamp-2 whitespace-pre-wrap">{content}</p>
      <div className="flex justify-between pt-4 items-end h-full">
        <div className="flex gap-2">
          <Eye className="text-gray-400" width={20} height={20} />
          <span className="text-sm text-gray-400 flex items-end">{views}</span>
        </div>
        <div className="flex gap-2">
          <Calendar className="text-gray-400" width={20} height={20} />
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export function MemoList() {
  const memos: MemoItemProps[] = Array.from({ length: 10 }, (_, index) => ({
    title: `Knowledge ${index + 1}`,
    content: `About Knowledgeasdasdasdasdsadasdada dasdasdasdadadadadasdasdas`,
    views: 1234,
    date: '2024-01-01',
    color: '#F18484',
  }));

  return (
    <div className="flex flex-col justify-center pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {memos.map((memo, index) => (
          <MemoItem key={index} {...memo} />
        ))}
      </div>
    </div>
  );
}
