import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { StorageEnum } from '@/types/enum'
import { getItem, setItem } from '@/utils/storage'

interface UseCountryStoreProps {
  currentCountry: string
  actions: {
    setCurrentCountry: (data: string) => void
  }
}

const useCountryStore = create<UseCountryStoreProps>()(
  devtools((set) => ({
    currentCountry: getItem<string | null>(StorageEnum.currentCountry) ?? 'FR',
    actions: {
      setCurrentCountry: (data: string) => {
        set({ currentCountry: data })
        setItem(StorageEnum.currentCountry, data)
      },
    },
  })),
)

export const useCurrentCountryState = () =>
  useCountryStore((state) => state.currentCountry)
export const useCountryActions = () => useCountryStore((state) => state.actions)
