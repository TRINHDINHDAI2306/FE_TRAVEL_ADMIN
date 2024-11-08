export type ApprovalRequestGuide = {
  id: number
  name: string
  username: string
  email: string
  provinceName: string
}

export type PendingInterviewGuide = {
  id: number
  createdAt: string
  username: string
  email: string
  provice: string
  interviewDate: string
  approvalBy: string
}

export type RejectedGuide = {
  id: number
  createdAt: string
  name: string
  email: string
}

export type ListGuide = {
  id: number
  createdAt: string
  name: string
  email: string
  phone: string
  tour: string
  provice: string
  money: number
  status: string
}

// Define DTO for query parameters
export type GuideDTO = {
  status?: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'WAITING_INTERVIEW'
  limit?: number
  type?: 'ApprovalRequestGuide' | 'PendingInterviewGuide' | 'RejectedGuide' | 'ListGuide'
}
