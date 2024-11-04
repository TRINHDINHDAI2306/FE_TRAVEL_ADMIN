import { create } from 'zustand'

import createSelectors from '@/lib/zustand-selectors.ts'
import { TUser } from '@/schemas/auth.schema'

type TAuthAction = {
  setAuth: (user: TUser | undefined) => void
  setIsInitialize: (data: 'success' | 'error' | 'isLoading') => void
}

type TAuthSate = {
  auth: TUser | undefined
  isInitialize: 'success' | 'error' | 'isLoading'
}
const useAuthStore = create<TAuthSate & TAuthAction>((set) => ({
  auth: undefined,
  isInitialize: 'isLoading',
  setAuth: (user) => set((state) => ({ ...state, auth: user })),
  setIsInitialize: (data) => set((state) => ({ ...state, isInitialize: data })),
}))

export default createSelectors(useAuthStore)
