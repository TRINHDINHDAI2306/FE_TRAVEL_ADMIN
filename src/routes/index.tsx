import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { PageWrapper } from '@/components/common/PageWrapper'
import { AdminLayout } from '@/layouts/AppLayout'
import { lazyImport } from '@/lib/layzy-import'
import { URL } from '@/utils/constants'
const { ManageAdminList } = lazyImport(() => import('@/pages/manager-admins/ManageAdminList'), 'ManageAdminList')
const { ManageUserList } = lazyImport(() => import('@/pages/manage-users/ManageUserList'), 'ManageUserList')
const { ManageGuide } = lazyImport(() => import('@/pages/manage-guides/ManageGuide'), 'ManageGuide')
const { ManageTour } = lazyImport(() => import('@/pages/manage-tours/ManageTours'), 'ManageTour')
const { ManageVouchers } = lazyImport(() => import('@/pages/manage-vouchers/ManageVouchers'), 'ManageVouchers')

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
            <ManageAdminList />
          </PageWrapper>
        ),
      },
      {
        path: URL.MANAGE_USER,
        element: (
          <PageWrapper>
            <ManageUserList />
          </PageWrapper>
        ),
      },
      {
        path: URL.MANAGE_GUIDE,
        element: (
          <PageWrapper>
            <ManageGuide />
          </PageWrapper>
        ),
      },
      {
        path: URL.MANAGE_TOUR,
        element: (
          <PageWrapper>
            <ManageTour />
          </PageWrapper>
        ),
      },
      {
        path: URL.MANAGE_VOUCHER,
        element: (
          <PageWrapper>
            <ManageVouchers />
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
