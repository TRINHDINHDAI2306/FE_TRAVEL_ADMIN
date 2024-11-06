import { create } from 'zustand'

import createSelectors from '@/lib/zustand-selectors'

type TCancelModalAction = {
  setIsOpen: (isOpen: boolean) => void
  setLinkTo: (linkTo: string) => void
}

type TCancelModalState = {
  isOpen: boolean
  linkTo: string
}

const useCancelModalStore = create<TCancelModalState & TCancelModalAction>((set) => ({
  isOpen: false,
  linkTo: '#',
  setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
  setLinkTo: (linkTo) => set((state) => ({ ...state, linkTo })),
}))

export default createSelectors(useCancelModalStore)
