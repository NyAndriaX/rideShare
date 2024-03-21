import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User } from '@/types/interface';
import { getItem, removeItem, setItem } from '@/utils/storage';
import { StorageEnum } from '@/types/enum';

interface UseAuthStoreProps {
	token: string | null;
	user: User | null;
  actions : {
    login : () => void;
    register : () => void;
    logout : () => void;
  }
}

const useAuthStore = create<UseAuthStoreProps>()(
	devtools((set) => ({
		token: getItem<string | null>(StorageEnum.Token),
		user: getItem<User | null>(StorageEnum.User),
    actions : {
      login : () => {
        console.log('login')
      },
      register : () => {
        console.log('register')
      },
      logout : () => {
        console.log('logout')
      }
    }
	}))
);

export const useUserInfo = () => useAuthStore((state) => state.user);
export const useUserToken = () => useAuthStore((state) => state.token);
export const useAuthActions = () => useAuthStore((state) => state.actions)