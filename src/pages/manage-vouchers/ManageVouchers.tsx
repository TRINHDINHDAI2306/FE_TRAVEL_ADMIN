import { useGetManageVouchers } from '@/api/manageVouchers/useGetVouchers'
import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import { PageHeader } from '@/components/common/PageHeader'
import { TableFooter } from '@/components/common/table/TableFooter'
import { AddIcon } from '@/components/icons'
import { ManageVoucherTable } from '@/components/manage-vouchers/ManageVoucherTable'
import { PageLayout } from '@/layouts/PageLayout'
import { PrimaryButtonType } from '@/types/enum'
import { ManageVoucherDTO } from '@/types/manageVoucher.type'
import { Card, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ManageVouchers = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useState<ManageVoucherDTO>({})

  const { data: manageVoucherData, refetch, isFetching, isLoading } = useGetManageVouchers({ params: searchParams })

  useEffect(() => {
    refetch()
  }, [searchParams])

  return (
    <PageLayout title={t('manageVoucher:TITLE_PAGE')}>
      <PageHeader title={t('manageVoucher:TITLE_PAGE')}>
        <PrimaryButton icon={<AddIcon />} buttonType={PrimaryButtonType.Primary1}>
          {t('button:BUTTON.ADD_VOUCHER')}
        </PrimaryButton>
      </PageHeader>
      <Card>
        <Typography.Title level={4} className='!text-red-500'>
          {t('manageVoucher:TITLE_CARD')} {manageVoucherData?.returnValue?.length}
        </Typography.Title>
        <ManageVoucherTable data={manageVoucherData?.returnValue} isFetching={isFetching} isLoading={isLoading} />
        <TableFooter pagination={manageVoucherData?.meta} setSearchParams={setSearchParams} />
      </Card>
    </PageLayout>
  )
}
