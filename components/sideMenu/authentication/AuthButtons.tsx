import { useState } from 'react';
import useUser from '../../../stores/use-user';
import UserModal from '../../common/modals/UserModal';
import ChangeUserInfoForm from './ChangeUserInfoForm';

export default function AuthButtons() {
  const { reset } = useUser((state) => state);
  const handleLogout = () => reset();

  const [isChangeProfile, setIsChangeProfile] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-10">
        <button
          type="button"
          className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-black"
          onClick={() => setIsChangeProfile(true)}
        >
          Change Profile
        </button>
        <button
          type="button"
          className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-black"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button type="button" className="rounded-md bg-[#FF6481] p-1 pl-2 pr-2 text-white hover:bg-red-600">
          Exit
        </button>
      </div>
      {isChangeProfile && (
        <UserModal onClose={() => setIsChangeProfile(false)} title="Change Profile">
          <ChangeUserInfoForm onClose={() => setIsChangeProfile(false)} />
        </UserModal>
      )}
    </>
  );
}
