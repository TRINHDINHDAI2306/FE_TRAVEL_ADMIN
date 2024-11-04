import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { AdminLayout } from '@/layouts/AdminLayout.tsx'
import { ForgotPasswordPage } from '@/pages/auth/ForgotPassowdPage'

import { GuestGuard } from '@/routes/components/GuestGuard.tsx'
import { URL } from '@/utils/constants'

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
        element: <Navigate to='/role' />,
      },
    ],
  },
  // {
  //   path: URL.LOGIN,
  //   element: (
  //     <GuestGuard>
  //       <AuthLayout title={i18n.t('auth:login.title')}>
  //         <LoginPage />
  //       </AuthLayout>
  //     </GuestGuard>
  //   ),
  // },
  // {
  //   path: URL.REGISTER,
  //   element: (
  //     <GuestGuard>
  //       <AuthLayout title={i18n.t('auth:register.title')}>
  //         <RegisterPage />
  //       </AuthLayout>
  //     </GuestGuard>
  //   ),
  // },
  {
    path: '/forgot-password',
    element: (
      <GuestGuard>
        <ForgotPasswordPage />
      </GuestGuard>
    ),
  },
  // {
  //   path: '/user/pwdreset',
  //   element: (
  //     <GuestGuard>
  //       <UpdatePasswordPage />
  //     </GuestGuard>
  //   ),
  // },
  //
  {
    path: URL.FORBIDDEN,
    element: <ErrorFallback />,
  },
  {
    path: '*',
    element: <ErrorFallback />,
  },
]

const router = createBrowserRouter(routes)
export default router
