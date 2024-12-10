/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ApprovalRequestTour, HistoryApprovalTour, ListTour, ManageTourDTO } from '@/types/manageTour.type'

type ManageTourResponse = ApprovalRequestTour | HistoryApprovalTour | ListTour

const getManagerTourGuides = <T extends ManageTourResponse>(params: ManageTourDTO) =>
  http.get<Response<T[]>>('/tours', { params })

const getManagerTourApproveGuides = <T extends ManageTourResponse>(params: ManageTourDTO) =>
  http.get<Response<T[]>>('/tours/admin/approve-list', { params })

type TUseGetManagerTourGuide<T extends ManageTourResponse> = {
  params: ManageTourDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_REPORT_GUIDE = 'GET_REPORT_GUIDE'

export const useGetManagerTourGuides = <T extends ManageTourResponse>({
  params,
  config = {},
}: TUseGetManagerTourGuide<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_REPORT_GUIDE, params],
    queryFn: () => getManagerTourGuides<T>(params),
    ...config,
  })

export const useGetManagerTourApproveGuides = <T extends ManageTourResponse>({
  params,
  config = {},
}: TUseGetManagerTourGuide<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_REPORT_GUIDE, params],
    queryFn: () => getManagerTourApproveGuides<T>(params),
    ...config,
  })
