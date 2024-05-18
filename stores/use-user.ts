import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  userId: string;
  nickname: string;
  profile: string;
  role: 'normal' | 'admin';
}

interface UserStore {
  isLoggedIn: boolean;
  userInfo: UserInfo;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  reset: () => void;
}

const useUser = create(
  persist<UserStore>(
    (set) => ({
      isLoggedIn: false,
      userInfo: {
        userId: '',
        nickname: '',
        profile: '',
        role: 'normal',
      },
      setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
      reset: () =>
        set(() => ({
          isLoggedIn: false,
          userInfo: {
            userId: '',
            nickname: '',
            profile: '',
            role: 'normal',
          },
        })),
    }),
    {
      name: 'userStorage',
    },
  ),
);

export default useUser;
