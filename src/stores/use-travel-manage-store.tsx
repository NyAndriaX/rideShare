import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { FormTripsData } from '@/types/interface'
import { _post } from '@/api/api-client'

interface useTravelManageProps {
  actions: {
    create: (userId: number, data: Partial<FormTripsData>) => Promise<any>
  }
}

const useTravelManageStore = create<useTravelManageProps>()(
  devtools(() => ({
    actions: {
      create: async (
        userId: number,
        data: Partial<FormTripsData>,
      ): Promise<any> => {
        return await _post<any>(`/trips/create/${userId}`, data)
      },
    },
  })),
)

export const useTravelManageActions = () =>
  useTravelManageStore((state) => state.actions)
