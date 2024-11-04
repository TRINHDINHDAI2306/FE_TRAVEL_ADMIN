import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { ForgotPasswordDTO } from '@/schemas/auth.schema.ts'
import { Response } from '@/types/common.tsx'

type ForgotPasswordResponse = {
  message: string
}

export const forgotPassword = (data: ForgotPasswordDTO) => {
  return http.post<Response<ForgotPasswordResponse>>(`/user/pwdforget`, { data })
}

type UseForgotPasswordOptions = {
  config?: MutationConfig<typeof forgotPassword>
}

export const useForgotPassword = ({ config }: UseForgotPasswordOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: forgotPassword,
  })
}
