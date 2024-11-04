import { useMutation } from '@tanstack/react-query'

import { http } from '@/lib/http.ts'
import { MutationConfig } from '@/lib/react-query.ts'
import { RegisterDTO } from '@/schemas/auth.schema.ts'
import { Response } from '@/types/common.tsx'

// Define the API function for registration
const register = (data: Omit<RegisterDTO, 'user_confirmPassword'>) =>
  http.post<Response<null>>(`/user/signup`, { data })

// Define the custom hook for registration
export const useRegister = (config: MutationConfig<typeof register> = {}) =>
  useMutation({
    ...config,
    mutationFn: register,
  })
