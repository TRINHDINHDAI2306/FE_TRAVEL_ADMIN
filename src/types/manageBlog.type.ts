/* eslint-disable @typescript-eslint/no-explicit-any */
export type HistoryBlog = {
  id: number
  title: string
  time: string
  user: any
  status: string
}

export type ReApprovalRequestBlog = {
  id: number
  title: string
  time: string
  user: any
}

export type RejectedBlog = {
  id: number
  title: string
  time: string
  user: any
}

export type ApprovalRequestBlog = {
  id: number
  title: string
  time: string
  user: any
}

export type ManageBlogDTO = {
  status?: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'WAITING'
  limit?: number
  type?: 'ApprovalRequestBlog' | 'ReApprovalRequestBlog' | 'RejectedBlog' | 'HistoryBlog'
}
