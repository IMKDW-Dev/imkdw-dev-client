import { Lock, Public } from '@mui/icons-material';
import clsx from 'clsx';

interface Props {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
}

export default function ArticleFormToggle({ visible, changeVisible }: Props) {
  return (
    <div className="flex w-1/2 flex-col gap-3 pl-5">
      <h3 className="text-xl">Set Visiblilty</h3>
      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Set visibility public"
          className={clsx(
            'flex w-1/2 items-center justify-center gap-5 rounded-md border border-gray-300 p-3 pl-4 pr-4',
            visible && 'bg-gray-200',
          )}
          onClick={() => changeVisible(true)}
        >
          <Public />
          <span className="text-lg">Public</span>
        </button>
        <button
          type="button"
          aria-label="Set visibility public"
          className={clsx(
            'flex w-1/2 items-center justify-center gap-5 rounded-md border border-gray-300 p-3 pl-4 pr-4',
            !visible && 'bg-gray-200',
          )}
          onClick={() => changeVisible(false)}
        >
          <Lock />
          <span className="text-lg">Private</span>
        </button>
      </div>
    </div>
  );
}
