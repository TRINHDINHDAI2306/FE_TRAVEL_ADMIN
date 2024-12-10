/* eslint-disable @typescript-eslint/no-explicit-any */
export type HistoryBlog = {
  id: number
  title: string
  time: string
  user: any
  status: number
}

export type ApprovalRequestBlog = {
  id: number
  title: string
  time: string
  user: any
  note: string
  status: number
}

export type ReportBlogDTO = {
  limit?: number
  startDate: string
  endDate: string
  type?: 'ApprovalRequestBlog' | 'HistoryBlog'
  skip?: number
}
