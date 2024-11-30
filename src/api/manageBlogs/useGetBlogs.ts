/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { http } from '@/lib/http'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import {  ManageBlogDTO, ApprovalRequestBlog, RejectedBlog, ReApprovalRequestBlog, HistoryBlog} from '@/types/manageBlog.type'

type BlogResponse = ApprovalRequestBlog | ReApprovalRequestBlog | RejectedBlog | HistoryBlog

const getManageBlogs = <T extends BlogResponse>(params: ManageBlogDTO) =>
  http.get<Response<T[]>>('/posts/admin', { params })

type TUseGetManageBlog<T extends BlogResponse> = {
  params: ManageBlogDTO
  config?: QueryConfig<() => Promise<Response<T[]>>>
}

const GET_BLOGS = 'GET_BLOGS'

export const useGetManageBlogs = <T extends BlogResponse>({ params, config = {} }: TUseGetManageBlog<T>) =>
  useQuery<Response<T[]>>({
    queryKey: [GET_BLOGS, params],
    queryFn: () => getManageBlogs<T>(params),
    ...config,
})

