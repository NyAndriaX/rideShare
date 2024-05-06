import { create } from 'zustand'
import { StorageEnum } from '@/types/enum'
import { devtools } from 'zustand/middleware'
import { FormOfferSeatsData } from '@/types/interface'
import { setItem, getItem } from '@/utils/storage'

interface useFormOfferSeatsProps {
  formOfferSeatsData?: Partial<FormOfferSeatsData> | undefined
  actions: {
    setFormOfferSeatsData: (data: Partial<FormOfferSeatsData>) => void
    resetItem: (key: keyof FormOfferSeatsData) => void
    resetFormOfferSeatsData: () => void
  }
}

const useFormOfferSeatsStore = create<useFormOfferSeatsProps>()(
  devtools((set, get) => ({
    formOfferSeatsData:
      getItem<Partial<FormOfferSeatsData>>(StorageEnum.formOfferSeats) ||
      undefined,
    actions: {
      setFormOfferSeatsData: (data: Partial<FormOfferSeatsData>) => {
        set((state) => ({
          formOfferSeatsData: { ...state.formOfferSeatsData, ...data },
        }))
        setItem(StorageEnum.formOfferSeats, get().formOfferSeatsData)
      },
      resetItem: (key: keyof FormOfferSeatsData) => {
        set((state) => {
          const newData = { ...state.formOfferSeatsData }
          delete newData[key]
          return { formOfferSeatsData: newData }
        })
        setItem(StorageEnum.formOfferSeats, get().formOfferSeatsData)
      },
      resetFormOfferSeatsData: () => {},
    },
  })),
)

export const useFormOfferSeatsData = () =>
  useFormOfferSeatsStore((state) => state.formOfferSeatsData)
export const useFormOfferSeatsActions = () =>
  useFormOfferSeatsStore((state) => state.actions)
