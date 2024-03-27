import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { User } from '@/types/interface'
import { getItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { RegisterInput, LoginInput } from '@/types/interface'
import { _post } from '@/api/api-client'

interface UseAuthStoreProps {
  token: string | null
  user: User | null
  actions: {
    login: (data: LoginInput) => Promise<void>
    register: (data: RegisterInput) => Promise<void>
    logout: () => void
  }
}

const useAuthStore = create<UseAuthStoreProps>()(
  devtools(() => ({
    token: getItem<string | null>(StorageEnum.Token),
    user: getItem<User | null>(StorageEnum.User),
    actions: {
      login: async (data: LoginInput): Promise<User | any> => {
        return await _post<User>('/users/login', data)
      },
      register: async (data: RegisterInput): Promise<User | any> => {
        return await _post<User>('/users/register', data)
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
