import { create } from 'zustand'

import createSelectors from '@/lib/zustand-selectors'

type LoadingSpinner = {
  loadingSpinner: boolean
}

type SetLoadingSpinner = {
  setLoadingSpinner: (loadingSpinner: boolean) => void
}

const useLoadingSpinnerStore = create<LoadingSpinner & SetLoadingSpinner>((set) => ({
  loadingSpinner: false,
  setLoadingSpinner: (loadingSpinner) => set((state) => ({ ...state, loadingSpinner })),
}))

export default createSelectors(useLoadingSpinnerStore)
