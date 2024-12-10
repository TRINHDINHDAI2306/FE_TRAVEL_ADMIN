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

  const [keyLoad, setKeyLoad] = useState(1)

  //   const handleOpenModal = () => setIsOpen(true)

  const { data: manageUserData, refetch, isFetching, isLoading } = useGetManageUsers({ params: searchParams })

  useEffect(() => {
    refetch()
  }, [searchParams, keyLoad])

  return (
    <PageLayout title={t('manageUser:TITLE_PAGE')}>
      <PageHeader title={t('manageUser:TITLE_PAGE')}></PageHeader>
      <Card>
        <Typography.Title level={4} className='!text-red-500'>
          {t('manageUser:TITLE_CARD')} {manageUserData?.returnValue?.data?.length || 0}
        </Typography.Title>
        <ManageUserTable data={manageUserData?.returnValue?.data || []} isLoading={isLoading} isFetching={isFetching} />
        <TableFooter pagination={manageUserData?.returnValue} setSearchParams={setSearchParams} />
      </Card>
      <CreateAdminModal setKeyLoad={() => setKeyLoad(keyLoad + 1)} isModal={isOpen} setIsModal={setIsOpen} />
    </PageLayout>
  )
}
