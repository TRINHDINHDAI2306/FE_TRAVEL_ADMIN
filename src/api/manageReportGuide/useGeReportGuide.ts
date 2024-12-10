/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ManageGuideReportDTO, ProcessedGuide, ProcessingGuide, ReportGuide } from '@/types/manageGuideReport.type'

type ReportGuideResponse = ProcessedGuide | ProcessingGuide | ReportGuide

const getManageReportGuides = <T extends ReportGuideResponse>(params: ManageGuideReportDTO) =>
  http.get<Response<T[]>>('/reports/admin/tourguide', { params })

type TUseGetManageReportGuide<T extends ReportGuideResponse> = {
  params: ManageGuideReportDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_REPORT_GUIDE = 'GET_REPORT_GUIDE'

export const useGetManageReportGuides = <T extends ReportGuideResponse>({
  params,
  config = {},
}: TUseGetManageReportGuide<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_REPORT_GUIDE, params],
    queryFn: () => getManageReportGuides<T>(params),
    ...config,
  })
