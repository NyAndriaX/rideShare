import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { StorageEnum } from '@/types/enum'
import { setItem, getItem, removeItem } from '@/utils/storage'

interface FormData {
  firstName?: string
  lastName?: string
  dateOfBirth?: Date
  gender?: string
  email?: string
  password?: string
  unsubscribe?: boolean
}

interface UseFormStoreProps {
  formData?: FormData | undefined
  actions: {
    setFormData: (data: Partial<FormData>) => void
    resetDataState: () => void
  }
}

const useFormStore = create<UseFormStoreProps>()(
  devtools((set, get) => ({
    formData: getItem<FormData>(StorageEnum.formDataRegister) || undefined,
    actions: {
      setFormData: (data: Partial<FormData>) => {
        set((state) => ({ formData: { ...state.formData, ...data } }))
        setItem(StorageEnum.formDataRegister, get().formData)
      },
      resetDataState: () => {
        removeItem(StorageEnum.formDataRegister)
      },
    },
  })),
)

export const useFormData = () => useFormStore((state) => state.formData)
export const useFormActions = () => useFormStore((state) => state.actions)
