/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { http } from '@/lib/http'
import { QueryConfig } from '@/lib/react-query'
import { Response } from '@/types/common'
import {
  ApprovalRequestBlog,
  HistoryBlog,
  ManageBlogDTO,
  ReApprovalRequestBlog,
  RejectedBlog,
} from '@/types/manageBlog.type'
import { useQuery } from '@tanstack/react-query'

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

type ActivePostData = {
  postId: number
  status: string
}

type ResponseActive = {
  message: string
  code: string
  statusCode: number
}

export const handleActivePost = (data: ActivePostData) => http.put<Response<ResponseActive>>(`/posts/admin`, data)
