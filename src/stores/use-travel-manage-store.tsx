import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { FormTripsData } from '@/types/interface'
import { _get, _post } from '@/api/api-client'

interface useTravelManageProps {
  actions: {
    create: (userId: number, data: Partial<FormTripsData>) => Promise<any>
    getTripWithId: (tripId: number) => Promise<any>
    getRecentTrips: () => Promise<any>
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
      getTripWithId: async (tripId: number) => {
        return await _get<any>(`/trips/${tripId}/details`)
      },
      getRecentTrips: async () => {
        return await _get('/trips/recents')
      },
    },
  })),
)

export const useTravelManageActions = () =>
  useTravelManageStore((state) => state.actions)
