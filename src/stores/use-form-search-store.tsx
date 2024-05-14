import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { FormSearchData } from '@/types/interface'

interface useFormSearchProps {
  results: []
  page: number
  resultatsLength: number
  formSearchData: Partial<FormSearchData>
  actions: {
    setFormSearchData: (data: Partial<FormSearchData>) => void
    findResults: (page: number) => void
  }
}

const useFormSearchStore = create<useFormSearchProps>()(
  devtools((set) => ({
    results: [],
    formSearchData: {},
    resultatsLength: 0,
    page: 0,
    actions: {
      setFormSearchData: (data: Partial<FormSearchData>) => {
        set({ formSearchData: data })
      },
      findResults: async (page: number) => {
        console.log(page)
      },
    },
  })),
)

export const useFormSearchData = () =>
  useFormSearchStore((state) => state.formSearchData)

export const useFormSearchAction = () =>
  useFormSearchStore((state) => state.actions)
