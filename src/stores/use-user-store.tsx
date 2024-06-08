import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
// import { StorageEnum } from '@/types/enum'
import { _post } from '@/api/api-client'
import { User } from '@/types/interface'

interface UseUserAuthStoreProps {
  action: {
    updatedProfile: (userId: number, data: Partial<User>) => Promise<any>
  }
}

const useUserStore = create<UseUserAuthStoreProps>()(
  devtools((set) => ({
    action: {
      updatedProfile: async (
        userId: number,
        data: Partial<User>,
      ): Promise<any> => {
        const res = _post<any>(`/users/profile/${userId}/update`, data)
        console.log(res)
      },
    },
  })),
)

export const useUserAction = () => useUserStore((state) => state.action)
