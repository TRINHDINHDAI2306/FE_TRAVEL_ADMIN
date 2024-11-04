import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { Response } from '@/types/common.tsx'

type TVerifyOtp = {
  user_email: string
  otp_code: string
}

const verifyOtpRegister = (data: TVerifyOtp) => http.post<Response<null>>(`/user/verify`, { data })

const verifyOtpForgotPassword = (data: TVerifyOtp) => http.post<Response<null>>(`/user/pwdforget/verify`, { data })

export const useVerifyOtpRegister = (config: MutationConfig<typeof verifyOtpRegister> = {}) =>
  useMutation({
    ...config,
    mutationFn: verifyOtpRegister,
  })

export const useVerifyOtpForgotPassword = (config: MutationConfig<typeof verifyOtpForgotPassword> = {}) =>
  useMutation({
    ...config,
    mutationFn: verifyOtpForgotPassword,
  })
