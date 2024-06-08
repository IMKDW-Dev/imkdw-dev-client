import { Lock, Public } from '@mui/icons-material';
import clsx from 'clsx';

import useCreateArticle from '../../../stores/use-create-article';

export default function ArticleMetadataSection() {
  const { data, setIsPublic } = useCreateArticle((state) => state);

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
    </section>
  );
}
