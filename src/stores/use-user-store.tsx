import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { _post } from '@/api/api-client'
import { User } from '@/types/interface'

interface UseUserAuthStoreProps {
  action: {
    updatedProfile: (userId: number, data: Partial<User>) => Promise<any>
  }
}

const useUserStore = create<UseUserAuthStoreProps>()(
  devtools(() => ({
    action: {
      updatedProfile: async (
        userId: number,
        userInfo: Partial<User>,
      ): Promise<any> => {
        return await _post<any>(`/users/profile/${userId}/update`, userInfo)
      },
    },
  })),
)

export const useUserAction = () => useUserStore((state) => state.action)
