import { useTranslation } from 'react-i18next'

import { UpdatePasswordForm } from '@/components/auth/UpdatePasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout.tsx'

export const UpdatePasswordPage = () => {
  const { t } = useTranslation()

  return (
    <AuthLayout title={t('update-password:title')} customClass='md:w-[424px]'>
      <UpdatePasswordForm />
    </AuthLayout>
  )
}
