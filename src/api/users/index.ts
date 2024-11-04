import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query.ts'
export const getUserProfile = () => {
  return http.get<number>('/auth/profile')
}

type QueryFnType = typeof getUserProfile

type UseUserProfileOptions = {
  config?: QueryConfig<QueryFnType> & {
    select?: (data: number) => string
  }
}

const USER_PROFILE_KEY = 'USER_PROFILE_KEY'

export const useUserProfile = ({ config }: UseUserProfileOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>, Error, string>({
    queryKey: [USER_PROFILE_KEY],
    queryFn: getUserProfile,
    ...config,
  })
}
