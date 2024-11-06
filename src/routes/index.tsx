import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { PageWrapper } from '@/components/common/PageWrapper'
import { AdminLayout } from '@/layouts/AppLayout'
import { lazyImport } from '@/lib/layzy-import'
import { URL } from '@/utils/constants'
const { MamageAdminList } = lazyImport(() => import('@/pages/manager-admins/ManageAdminList'), 'MamageAdminList')

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AdminLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={URL.MANAGE_ADMIN} />,
      },
      {
        path: URL.MANAGE_ADMIN,
        element: (
          <PageWrapper>
            <MamageAdminList />
          </PageWrapper>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorFallback />,
  },
]

const router = createBrowserRouter(routes)
export default router
