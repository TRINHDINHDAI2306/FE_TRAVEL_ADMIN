import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { LoginDTO } from '@/schemas/auth.schema.ts'
import { Response } from '@/types/common.tsx'

type LoginData = LoginDTO & {
  device_id: string
  ip: string
  email: string
  password: string
}

type LoginResponse = {
  access_token: string
  refresh_token: string
  device_id: string
}

const login = (data: LoginData) => http.post<Response<LoginResponse>>(`/auth/login-admin`, { data })

export const useLogin = (config: MutationConfig<typeof login> = {}) =>
  useMutation({
    ...config,
    mutationFn: login,
  })
