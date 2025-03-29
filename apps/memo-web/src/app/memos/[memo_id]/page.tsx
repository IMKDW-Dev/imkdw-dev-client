import { MemoDetailActions } from '@/src/components';

interface MemoDetailPageProps {
  params: {
    memo_id: string;
  };
}

export default async function MemoDetailPage({ params }: MemoDetailPageProps) {
  return (
    <section className="flex flex-col bg-white shadow-primary rounded-lg p-4 h-full">
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <h1 className="text-2xl">MemoDetailPage {params.memo_id}</h1>
        <MemoDetailActions memoId={params.memo_id} />
      </div>
    </section>
  );
}
