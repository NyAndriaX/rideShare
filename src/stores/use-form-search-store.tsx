import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { FormSearchData } from '@/types/interface'

interface useFormSearchProps {
  formSearchData: Partial<FormSearchData>
  results: []
  resultatsLength: number
  page: number
  actions: {
    setFormSearchData: (data: Partial<FormSearchData>) => void
    findResults: (page: number) => void
  }
}

const useFormSearchStore = create<useFormSearchProps>()(
  devtools((set, get) => ({
    results: [],
    formSearchData: {},
    resultatsLength: 0,
    page: 0,
    actions: {
      setFormSearchData: (data: Partial<FormSearchData>) => {
        get().formSearchData
        set({ formSearchData: data })
      },
      findResults: async (page: number) => {
        console.log(page)
      },
    },
  })),
)

export const useFormSearchData = () =>
  useFormSearchStore((state) => state.results)

export const useFormSearchAction = () =>
  useFormSearchStore((state) => state.actions)
