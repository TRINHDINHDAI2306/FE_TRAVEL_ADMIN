import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common.tsx'
import { ManageUser, ManageUserDTO } from '@/types/manageUser.type'

const getManageUsers = (params: ManageUserDTO) => http.get<Response<ManageUser[]>>('/users', { params })

type QueryFnType = typeof getManageUsers

type TUseGetManageUsers = {
  params: ManageUserDTO
  config?: QueryConfig<QueryFnType>
}

const GET_USERS = 'GET_USERS'

export const useGetManageUsers = ({ params, config = {} }: TUseGetManageUsers) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [GET_USERS, params],
    queryFn: () => getManageUsers(params),
    ...config,
  })
