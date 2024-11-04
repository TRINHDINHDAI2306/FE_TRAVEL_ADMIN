import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate } from 'react-router-dom'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import useAuthStore from '@/stores/auth.store.ts'
import { URL } from '@/utils/constants'

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  const authUser = useAuthStore.use.auth()

  if (authUser) {
    switch (authUser.role_name) {
      case 'SUPER_ADMIN':
        return <Navigate to={URL.PERMISSION} replace />
      case 'ADMIN_COMPANY':
        return <Navigate to={URL.JOB} replace />
      case 'HR_USER':
        return <Navigate to={URL.JOB} replace />
      case 'NORMAL_USER':
        return <Navigate to={URL.JOB_LISTING} replace />
    }
  }

  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
}
