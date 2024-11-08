import { Card, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useGetManageUsers } from '@/api/users/useGetManageUser'
import { PageHeader } from '@/components/common/PageHeader'
import { TableFooter } from '@/components/common/table/TableFooter'
import { ManageUserTable } from '@/components/manage-uers/ManageUserTable'
import { CreateAdminModal } from '@/components/modals/CreateAdminModal'
import { PageLayout } from '@/layouts/PageLayout'
import { ManageUserDTO } from '@/types/manageUser.type'

export const ManageUserList = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useState<ManageUserDTO>({})
  const [isOpen, setIsOpen] = useState(false)

  //   const handleOpenModal = () => setIsOpen(true)

  const { data: manageUserData, refetch, isFetching, isLoading } = useGetManageUsers({ params: searchParams })

  useEffect(() => {
    refetch()
  }, [searchParams])

  return (
    <PageLayout title={t('manageUser:TITLE_PAGE')}>
      <PageHeader title={t('manageUser:TITLE_PAGE')}></PageHeader>
      <Card>
        <Typography.Title level={4} className='!text-red-500'>
          {t('manageUser:TITLE_CARD')} {manageUserData?.returnValue?.length}
        </Typography.Title>
        <ManageUserTable data={manageUserData?.returnValue} isLoading={isLoading} isFetching={isFetching} />
        <TableFooter pagination={manageUserData?.meta} setSearchParams={setSearchParams} />
      </Card>
      <CreateAdminModal isModal={isOpen} setIsModal={setIsOpen} />
    </PageLayout>
  )
}
