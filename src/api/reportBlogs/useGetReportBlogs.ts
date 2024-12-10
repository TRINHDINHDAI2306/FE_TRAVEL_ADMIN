/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ApprovalRequestBlog, HistoryBlog, ReportBlogDTO } from '@/types/reportBlog.type'

type ReportBlogResponse = ApprovalRequestBlog | HistoryBlog

const getReportBlogs = <T extends ReportBlogResponse>(params: ReportBlogDTO) =>
  http.get<Response<T[]>>('/reports/admin/post', { params })

type TUseGetReportBlog<T extends ReportBlogResponse> = {
  params: ReportBlogDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_REPORT_BLOGS = 'GET_REPORT_BLOGS'

export const useGetReportBlogs = <T extends ReportBlogResponse>({ params, config = {} }: TUseGetReportBlog<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_REPORT_BLOGS, params],
    queryFn: () => getReportBlogs<T>(params),
    ...config,
  })
