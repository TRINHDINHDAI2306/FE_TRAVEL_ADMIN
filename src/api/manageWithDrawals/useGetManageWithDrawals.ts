/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ApprovalRequestWithDrawals, HistoryWithDrawals, ManageWithDrawalsDTO } from '@/types/manageWithDrawals.type'

type ManageWithDrawalsResponse = ApprovalRequestWithDrawals | HistoryWithDrawals

const getReportBlogs = <T extends ManageWithDrawalsResponse>(params: ManageWithDrawalsDTO) =>
  http.get<Response<T[]>>('/transactions/request-withdraw', { params })

type TUseGetManageWithDrawals<T extends ManageWithDrawalsResponse> = {
  params: ManageWithDrawalsDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_REPORT_BLOGS = 'GET_REPORT_BLOGS'

export const useGetManageWithDrawals = <T extends ManageWithDrawalsResponse>({
  params,
  config = {},
}: TUseGetManageWithDrawals<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_REPORT_BLOGS, params],
    queryFn: () => getReportBlogs<T>(params),
    ...config,
  })
