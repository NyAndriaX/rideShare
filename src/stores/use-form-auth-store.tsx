import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { StorageEnum } from '@/types/enum'
import { setItem, getItem, removeItem } from '@/utils/storage'

interface FormAuthData {
  firstName?: string
  lastName?: string
  dateOfBirth?: Date
  gender?: string
  email?: string
  password?: string
  unsubscribe?: boolean
}

interface UseFormAuthStoreProps {
  formAuthData?: FormAuthData | undefined
  actions: {
    setFormAuthData: (data: Partial<FormAuthData>) => void
    resetAuthDataState: () => void
  }
}

const useFormAuthStore = create<UseFormAuthStoreProps>()(
  devtools((set, get) => ({
    formAuthData:
      getItem<FormAuthData>(StorageEnum.formAuthDataRegister) || undefined,
    actions: {
      setFormAuthData: (data: Partial<FormAuthData>) => {
        set((state) => ({ formAuthData: { ...state.formAuthData, ...data } }))
        setItem(StorageEnum.formAuthDataRegister, get().formAuthData)
      },
      resetAuthDataState: () => {
        removeItem(StorageEnum.formAuthDataRegister)
      },
    },
  })),
)

export const useFormAuthData = () =>
  useFormAuthStore((state) => state.formAuthData)
export const useFormAuthActions = () =>
  useFormAuthStore((state) => state.actions)
