// Import statements
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import {
  ApprovalRequestGuide,
  GuideDTO,
  ListGuide,
  PendingInterviewGuide,
  RejectedGuide,
} from '@/types/manageGuide.type'

type GuideResponse = ApprovalRequestGuide | PendingInterviewGuide | RejectedGuide | ListGuide

const getManageGuides = <T extends GuideResponse>(params: GuideDTO) =>
  http.get<Response<T[]>>('/tour-guide/admin', { params })

type TUseGetManageGuides<T extends GuideResponse> = {
  params: GuideDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_GUIDES = 'GET_GUIDES'

export const useGetManageGuides = <T extends GuideResponse>({ params, config = {} }: TUseGetManageGuides<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_GUIDES, params],
    queryFn: () => getManageGuides<T>(params),
    ...config,
  })
