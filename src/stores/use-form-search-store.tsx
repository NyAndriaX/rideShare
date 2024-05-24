import { create } from 'zustand'
import { _post } from '@/api/api-client'
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
  devtools((set, get) => ({
    results: [],
    formSearchData: {},
    resultatsLength: 0,
    page: 0,
    actions: {
      setFormSearchData: async (data: Partial<FormSearchData>) => {
        set({ formSearchData: data })
        const res = await _post<any>(`/trips/search/${get().page}`, data)
        console.log(res)
      },
      findResults: async (page: number) => {},
    },
  })),
)

export const useFormSearchData = () =>
  useFormSearchStore((state) => state.formSearchData)

export const useFormSearchAction = () =>
  useFormSearchStore((state) => state.actions)
