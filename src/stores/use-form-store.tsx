import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface FormData {
  firstName?: string
  lastName?: string
  dateOfBirth?: Date
  genre?: string
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
  devtools((set) => ({
    formData: undefined,
    actions: {
      setFormData: (data: Partial<FormData>) => {
        set((state) => ({ formData: { ...state.formData, ...data } }))
      },
      resetDataState: () => {
        console.log('resetDataState')
      },
    },
  })),
)

export const useFormData = () => useFormStore((state) => state.formData)
export const useFormActions = () => useFormStore((state) => state.actions)
