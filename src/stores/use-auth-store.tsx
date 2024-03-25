import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { User } from '@/types/interface'
import { getItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { RegisterInput } from '@/types/interface'

interface UseAuthStoreProps {
  token: string | null
  user: User | null
  actions: {
    login: () => void
    register: (data: RegisterInput) => void
    logout: () => void
  }
}

const useAuthStore = create<UseAuthStoreProps>()(
  devtools(() => ({
    token: getItem<string | null>(StorageEnum.Token),
    user: getItem<User | null>(StorageEnum.User),
    actions: {
      login: () => {
        console.log('login')
      },
      register: (data: RegisterInput) => {
        console.log(data)
      },
      logout: () => {
        console.log('logout')
      },
    },
  })),
)

export const useUserInfo = () => useAuthStore((state) => state.user)
export const useUserToken = () => useAuthStore((state) => state.token)
export const useAuthActions = () => useAuthStore((state) => state.actions)
