import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
}
