import { ReactNode, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Spinner from '@/components/common/Spinner.tsx'
import Nprogress from '@/lib/nprogress.ts'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    Nprogress.start()
    Nprogress.done()
  }, [location?.pathname])

  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}
