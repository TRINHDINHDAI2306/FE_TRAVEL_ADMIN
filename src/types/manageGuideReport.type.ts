/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReportGuide = {
  id: number
  title: string
  time: string
  status: string
  order: string
  reportedBy: string
  reportNum: number
  content: string
}

export type ProcessingGuide = {
  id: number
  title: string
  time: string
  status: string
  order: string
  reportedBy: string
  reportNum: number
  content: string
  meetingDate: string
}

export type ProcessedGuide = {
  id: number
  title: string
  time: string
  status: string
  order: string
  reportedBy: string
  reportNum: number
  content: string
  meetingDate: string
}

export type ManageGuideReportDTO = {
  status: string
  limit?: number
  skip?: number
}
