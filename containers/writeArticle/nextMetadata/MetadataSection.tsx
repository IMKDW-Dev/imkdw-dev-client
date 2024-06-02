import { Lock, Public } from '@mui/icons-material';
import useCreateArticle from '../../../stores/use-create-article';
import clsx from 'clsx';

export default function ArticleMetadataSection() {
  const { data, setId, setIsPublic } = useCreateArticle((state) => state);

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <section className="flex w-1/2 flex-col gap-5 pl-5">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Set Visiblilty</h3>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Set visibility public"
            className={clsx(
              'flex w-1/2 items-center justify-center gap-5 rounded-md border border-gray-300 p-3 pl-4 pr-4',
              data.isPublic && 'bg-gray-200',
            )}
            onClick={() => setIsPublic(true)}
          >
            <Public />
            <span className="text-lg">Public</span>
          </button>
          <button
            type="button"
            aria-label="Set visibility public"
            className={clsx(
              'flex w-1/2 items-center justify-center gap-5 rounded-md border border-gray-300 p-3 pl-4 pr-4',
              !data.isPublic && 'bg-gray-200',
            )}
            onClick={() => setIsPublic(false)}
          >
            <Lock />
            <span className="text-lg">Private</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">URL</h3>
        <div className="flex border border-gray-300 p-3">
          <span className="flex h-full items-center justify-center text-lg">/articles/</span>
          <input
            type="text"
            className="w-full rounded-md"
            value={data.id}
            onChange={handleChangeUrl}
            placeholder=".......article-url"
          />
        </div>
      </div>
    </section>
  );
}
