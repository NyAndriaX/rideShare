import { create } from 'zustand'
import { StorageEnum } from '@/types/enum'
import { devtools } from 'zustand/middleware'
import { FormTripsData } from '@/types/interface'
import { setItem, getItem } from '@/utils/storage'

interface useFormTripsProps {
  formTripsData?: Partial<FormTripsData> | undefined
  actions: {
    setFormTripsData: (data: Partial<FormTripsData>) => void
    resetItem: (key: keyof Partial<FormTripsData>) => void
    resetFormTripsData: () => void
  }
}

const useFormTripsStore = create<useFormTripsProps>()(
  devtools((set, get) => ({
    formTripsData:
      getItem<Partial<FormTripsData>>(StorageEnum.formTrips) || undefined,
    actions: {
      setFormTripsData: (data: Partial<FormTripsData>) => {
        set((state) => ({
          formTripsData: { ...state.formTripsData, ...data },
        }))
        setItem(StorageEnum.formTrips, get().formTripsData)
      },
      resetItem: (key: keyof Partial<FormTripsData>) => {
        set((state) => {
          const newData = { ...state.formTripsData }
          delete newData[key]
          return { formTripsData: newData }
        })
        setItem(StorageEnum.formTrips, get().formTripsData)
      },
      resetFormTripsData: () => {},
    },
  })),
)

export const useFormTripsData = () =>
  useFormTripsStore((state) => state.formTripsData)

export const useFormTripsActions = () =>
  useFormTripsStore((state) => state.actions)
