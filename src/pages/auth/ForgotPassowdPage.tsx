import { useTranslation } from 'react-i18next'

import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout.tsx'

export const ForgotPasswordPage = () => {
  const { t } = useTranslation()

  return (
    <AuthLayout title={t('forgot-password:forgot.title')} customClass='md:w-[424px]'>
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
