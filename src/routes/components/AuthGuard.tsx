import { includes } from 'lodash-es'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import useAuthStore from '@/stores/auth.store.ts'
import { ERROR_FORBIDDEN_MESSAGE } from '@/utils/constants.ts'

export const AuthGuard = ({ children, allowRoles }: { children: ReactNode; allowRoles: number[] }) => {
  const authUser = useAuthStore.use.auth()

  if (!authUser) {
    return <Navigate to='/login' replace />
  }

  if (!includes(allowRoles, 2)) {
    throw Error(ERROR_FORBIDDEN_MESSAGE)
  }
  return <>{children}</>
}
