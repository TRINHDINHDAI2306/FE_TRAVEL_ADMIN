import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common.tsx'
import { ManageAdmin, ManageAdminDTO } from '@/types/manageAdmin.type'

const getManageAdmins = (params: ManageAdminDTO) => http.get<Response<ManageAdmin[]>>('/admin', { params })

type QueryFnType = typeof getManageAdmins

type TUseGetManageAdmins = {
  params: ManageAdminDTO
  config?: QueryConfig<QueryFnType>
}

const GET_ADMINS = 'GET_ADMINS'

export const useGetManageAdmins = ({ params, config = {} }: TUseGetManageAdmins) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [GET_ADMINS, params],
    queryFn: () => getManageAdmins(params),
    ...config,
  })
