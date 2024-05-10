import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { FormSearchData } from '@/types/interface'

interface useFormSearchProps {
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
    resultatsLength: 0,
    page: 0,
    actions: {
      setFormSearchData: (data: Partial<FormSearchData>) => {},
      findResults: async (page: number) => {},
    },
  })),
)

export const useFormSearchData = () =>
  useFormSearchStore((state) => state.results)

export const useFormSearchAction = () =>
  useFormSearchStore((state) => state.actions)
