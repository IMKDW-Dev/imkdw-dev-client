import clsx from 'clsx';
import useUser from '../../../../stores/use-user';
import { userRole } from '../../../../constants/user.constant';

export default function BookFormSubmitButton() {
  const { userInfo } = useUser((state) => state);

  return (
    <button
      type="submit"
      className={clsx(
        'w-1/3 rounded-md p-2 text-white',
        userInfo.role === userRole.NORMAL ? 'bg-gray-300' : 'bg-[#6658DD] hover:bg-[#573BBC]',
      )}
      disabled={userInfo.role === userRole.NORMAL}
    >
      Create
    </button>
  );
}
