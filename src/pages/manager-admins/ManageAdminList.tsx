import { Card, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useGetManageAdmins } from '@/api/manageAdmins/useGetManageAdmins'
import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import { PageHeader } from '@/components/common/PageHeader'
import { TableFooter } from '@/components/common/table/TableFooter'
import { AddIcon } from '@/components/icons'
import { ManageAdminTable } from '@/components/manager-admins/ManageAdminTable'
import { CreateAdminModal } from '@/components/modals/CreateAdminModal'
import { PageLayout } from '@/layouts/PageLayout'
import { PrimaryButtonType } from '@/types/enum'
import { ManageAdminDTO } from '@/types/manageAdmin.type'

export const ManageAdminList = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useState<ManageAdminDTO>({})
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)

  const [keyLoad, setKeyLoad] = useState(1)

  const { data: manageAdminData, refetch, isFetching, isLoading } = useGetManageAdmins({ params: searchParams })
  useEffect(() => {
    refetch()
  }, [searchParams, keyLoad])

  return (
    <PageLayout title={t('manageAdmin:TITLE_PAGE')}>
      <PageHeader title={t('manageAdmin:TITLE_PAGE')}>
        <PrimaryButton icon={<AddIcon />} buttonType={PrimaryButtonType.Primary1} onClick={handleOpenModal}>
          {t('button:BUTTON.CREATE')}
        </PrimaryButton>
      </PageHeader>
      <Card>
        <Typography.Title level={4} className='!text-red-500'>
          {t('manageAdmin:TITLE_CARD')} {manageAdminData?.returnValue?.data?.length || 0}
        </Typography.Title>
        <ManageAdminTable
          data={manageAdminData?.returnValue?.data || []}
          isLoading={isLoading}
          isFetching={isFetching}
        />
        <TableFooter pagination={manageAdminData?.returnValue} setSearchParams={setSearchParams} />
      </Card>
      <CreateAdminModal setKeyLoad={() => setKeyLoad(keyLoad + 1)} isModal={isOpen} setIsModal={setIsOpen} />
    </PageLayout>
  )
}
