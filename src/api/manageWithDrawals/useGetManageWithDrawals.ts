/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ManageWithDrawals, ManageWithDrawalsDTO } from '@/types/manageWithDrawals.type'

const getManageWithDrawals = <T extends ManageWithDrawals>(params: ManageWithDrawalsDTO) =>
  http.get<Response<T[]>>('/transactions/admin', { params })

type TUseGetManageWithDrawals<T extends ManageWithDrawals> = {
  params: ManageWithDrawalsDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_ALL_WITHDRAWALS = 'GET_ALL_WITHDRAWALS'

export const useGetManageWithDrawals = <T extends ManageWithDrawals>({
  params,
  config = {},
}: TUseGetManageWithDrawals<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_ALL_WITHDRAWALS, params],
    queryFn: () => getManageWithDrawals<T>(params),
    ...config,
  })

type ActiveWithdrawalsData = {
  withdrawId: number
  action: string
}

type ResponseActive = {
  message: string
  code: string
  statusCode: number
}

export const handleActiveWithdrawals = (data: ActiveWithdrawalsData) =>
  http.put<Response<ResponseActive>>(`/transactions/request-withdraw`, data)

const getManageWithDrawalsWaiting = <T extends ManageWithDrawals>(params: ManageWithDrawalsDTO) =>
  http.get<Response<T[]>>('/transactions/request-withdraw', { params })

const GET_ALL_WITHDRAWALS_WAITING = 'GET_ALL_WITHDRAWALS_WAITING'

export const useGetManageWithDrawalsWaiting = <T extends ManageWithDrawals>({
  params,
  config = {},
}: TUseGetManageWithDrawals<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_ALL_WITHDRAWALS_WAITING, params],
    queryFn: () => getManageWithDrawalsWaiting<T>(params),
    ...config,
  })
