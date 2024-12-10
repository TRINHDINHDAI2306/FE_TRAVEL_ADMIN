import { NoticeType } from 'antd/es/message/interface'
import { create } from 'zustand'

import createSelectors from '@/lib/zustand-selectors'

type TAlertConfig =
  | { type: NoticeType; key?: string; message: string | number; field?: string; field2?: string }
  | undefined

type TAlertAction = {
  setAlertConfig: (alertConfig: TAlertConfig) => void
}

type TAlertState = {
  alertConfig: TAlertConfig
}

const useAlertStore = create<TAlertState & TAlertAction>((set) => ({
  alertConfig: undefined,
  setAlertConfig: (alertConfig) => set((state) => ({ ...state, alertConfig })),
}))

export default createSelectors(useAlertStore)
