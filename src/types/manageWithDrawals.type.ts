/* eslint-disable @typescript-eslint/no-explicit-any */
export type HistoryWithDrawals = {
  id: number
  title: string
  time: string
  user: any
  status: number
  user_guide: string
}

export type ApprovalRequestWithDrawals = {
  id: number
  title: string
  time: string
  user: any
  user_guide: string
  status: number
}

export type ManageWithDrawalsDTO = {
  limit?: number
  startDate: string
  endDate: string
  type?: 'ApprovalRequestWithDrawals' | 'HistoryWithDrawals'
}
