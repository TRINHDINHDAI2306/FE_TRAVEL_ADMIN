import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query.ts'
import { TUser } from '@/schemas/auth.schema'
import { Response } from '@/types/common'

const getMe = () => http.get<Response<TUser>>('/auth/me')

type QueryFnType = typeof getMe

const ME_KEY = 'ME_KEY'

export const useGetMe = (config: QueryConfig<QueryFnType> = {}) =>
  useQuery<ExtractFnReturnType<QueryFnType>, Error, Response<TUser>>({
    queryKey: [ME_KEY],
    queryFn: getMe,
    ...config,
  })
