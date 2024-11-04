import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { UpdatePasswordDTO } from '@/schemas/auth.schema.ts'
import { Response } from '@/types/common.tsx'

type UpdatePasswordResponse = {
  message: string
}

export const updatePassword = (
  data: UpdatePasswordDTO & { user_email: string; nonce: string; timestamp: string; sign: string },
) => {
  const url = new URL(`/user/pwdreset`, 'http://localhost:3000')
  url.searchParams.append('nonce', data.nonce)
  url.searchParams.append('timestamp', data.timestamp)
  url.searchParams.append('email', data.user_email)
  url.searchParams.append('sign', data.sign)

  return http.post<Response<UpdatePasswordResponse>>(url.toString(), { data })
}

type UseUpdatePasswordOptions = {
  config?: MutationConfig<typeof updatePassword>
}

export const useUpdatePassword = ({ config }: UseUpdatePasswordOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: updatePassword,
  })
}
