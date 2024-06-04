import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { User } from '@/types/interface'
import { getItem, setItem, removeItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { _post } from '@/api/api-client'
import { toast } from 'react-toastify'
import { RegisterInput, LoginInput } from '@/types/interface'

interface UseAuthStoreProps {
  token: string | null
  user: User | null
  actions: {
    login: (data: LoginInput) => Promise<any>
    register: (data: RegisterInput) => Promise<any>
    me: (token: string) => Promise<User | null | any>
    logout: () => void
  }
}

const useAuthStore = create<UseAuthStoreProps>()(
  devtools((set) => ({
    token: getItem<string | null>(StorageEnum.Token) ?? null,
    user: null as User | null,
    actions: {
      login: async (data: LoginInput): Promise<any> => {
        const res = await _post<any>('/auth/login', data)
        const { token } = res.data
        setItem(StorageEnum.Token, token)
        return token
      },
      register: async (data: RegisterInput): Promise<any> => {
        const res = await _post<any>('/auth/register', data)
        const { statusText } = res
        return statusText
      },
      me: async (token: string): Promise<User | null | any> => {
        try {
          const res = await _post<User | null | any>('/token/decode', { token })
          const { user } = res.data
          set({ user })
          return user
        } catch (e: any) {
          removeItem(StorageEnum.Token)
          toast.warning('please, log in again')
        }
      },
      logout: () => {
        set({ token: null, user: null })
        removeItem(StorageEnum.Token)
      },
    },
  })),
)

export const useUserInfo = () => useAuthStore((state) => state.user)
export const useUserToken = () => useAuthStore((state) => state.token)
export const useAuthActions = () => useAuthStore((state) => state.actions)
