import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const USE_USER_PRESIST_KEY = 'userStorage';

interface UserStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useUser = create(
  persist<UserStore>(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    }),
    {
      name: USE_USER_PRESIST_KEY,
    },
  ),
);

export default useUser;
