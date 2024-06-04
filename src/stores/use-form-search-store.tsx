import { create } from 'zustand'
import { _post } from '@/api/api-client'
import { StorageEnum } from '@/types/enum'
import { devtools } from 'zustand/middleware'
import { FormSearchData } from '@/types/interface'
import { setItem, getItem } from '@/utils/storage'

interface useFormSearchProps {
  page: number
  totalPages: number
  totalItems: number
  trips: any[]
  formSearchData: Partial<FormSearchData>
  actions: {
    search: (data: Partial<FormSearchData>) => void
    nextPage: () => void
  }
}

const useFormSearchStore = create<useFormSearchProps>()(
  devtools((set, get) => ({
    formSearchData:
      getItem<Partial<FormSearchData>>(StorageEnum.formSearchData) || {},
    totalPages: 0,
    totalItems: 0,
    page: 1,
    trips: [],
    actions: {
      search: async (data: Partial<FormSearchData>) => {
        set({ formSearchData: data, page: 0 })
        setItem(StorageEnum.formSearchData, data)
        const res = await _post<any>(`/trips/search/${0}`, get().formSearchData)
        const { totalPages, totalItems, trips } = res.data
        set({ totalPages: totalPages, totalItems: totalItems, trips: trips })
      },
      nextPage: async () => {
        set((state) => ({ page: state.page + 1 }))
        const res = await _post<any>(
          `/trips/search/${get().page}`,
          get().formSearchData,
        )
        const { totalItems, totalPages, trips } = res.data
        set((state) => ({
          totalItems: totalItems,
          totalPages: totalPages,
          trips: [...state.trips, ...trips],
        }))
      },
    },
  })),
)

export const useFormSearchData = () =>
  useFormSearchStore((state) => state.formSearchData)
export const useTotalSearchPages = () =>
  useFormSearchStore((state) => state.totalPages)
export const useTotalSearchItems = () =>
  useFormSearchStore((state) => state.totalItems)
export const useFormSearchAction = () =>
  useFormSearchStore((state) => state.actions)
export const useSearchTrips = () => useFormSearchStore((state) => state.trips)
export const useSearchCountPage = () =>
  useFormSearchStore((state) => state.page)
