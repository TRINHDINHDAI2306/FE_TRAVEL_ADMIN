import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate } from 'react-router-dom'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import useAuthStore from '@/stores/auth.store.ts'
import { URL } from '@/utils/constants'

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  const authUser = useAuthStore.use.auth()

  // if (authUser) {
  // }

  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
}
