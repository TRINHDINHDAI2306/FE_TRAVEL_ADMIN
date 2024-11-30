import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import { ManageVoucherDTO, VoucherList } from '@/types/manageVoucher.type'

const getVouchers = (params: ManageVoucherDTO) => {
  return http.get<Response<VoucherList[]>>('/vouchers', { params })
}

type QueryFnType = typeof getVouchers

type TUseGetManageVouchers = {
  params: ManageVoucherDTO
  config?: QueryConfig<QueryFnType>
}

const GET_VOUCHERS = 'GET_VOUCHERS'

export const useGetManageVouchers = ({ params, config = {} }: TUseGetManageVouchers) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [GET_VOUCHERS, params],
    queryFn: () => getVouchers(params),
    ...config,
  })
