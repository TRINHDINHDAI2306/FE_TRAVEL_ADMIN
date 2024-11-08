import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { Response } from '@/types/common'

export const createAdmin = (data: { username: string; email: string; role: string }) => {
  return http.post<Response<null>>(`/admin`, {
    data,
  })
}

type UseCreateAdmins = {
  config?: MutationConfig<typeof createAdmin>
}

export const useCreateAdmin = ({ config }: UseCreateAdmins) => {
  return useMutation({
    ...config,
    mutationFn: createAdmin,
  })
}
