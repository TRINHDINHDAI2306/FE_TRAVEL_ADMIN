import { useTranslation } from 'react-i18next'

import { PageLayout } from '@/layouts/PageLayout'

export const MamageAdminList = () => {
  const { t } = useTranslation()
  return <PageLayout title={t('manageAdmin:TITLE_PAGE')}></PageLayout>
}
