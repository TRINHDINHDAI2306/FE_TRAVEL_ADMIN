export type ApprovalRequestTour = {
  id: number
  time: string
  name: string
  nameGuide: string
  province: string
}

export type HistoryApprovalTour = {
  id: number
  time: string
  name: string
  nameGuide: string
  provice: string
  status: string
  approvedBy: string
}

export type ListTour = {
  id: number
  time: string
  name: string
  nameGuide: string
  provice: string
  status: string
}
