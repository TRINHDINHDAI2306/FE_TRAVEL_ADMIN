/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Card, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useGetManageVouchers } from '@/api/manageVouchers/useGetVouchers'
import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import { PageHeader } from '@/components/common/PageHeader'
import { TableFooter } from '@/components/common/table/TableFooter'
import { AddIcon } from '@/components/icons'
import { ManageVoucherTable } from '@/components/manage-vouchers/ManageVoucherTable'
import { PageLayout } from '@/layouts/PageLayout'
import { PrimaryButtonType } from '@/types/enum'
import { ManageVoucherDTO } from '@/types/manageVoucher.type'
import ModalAddVoucher from './popupThemMaGiamGia'

export const ManageVouchers = () => {
  const { t } = useTranslation()
  const [popAddVoucher, setPopAddVoucher] = useState(false)
  const [searchParams, setSearchParams] = useState<ManageVoucherDTO>({})

  const [keyLoad, setKeyLoad] = useState(1)

  const { data: manageVoucherData, refetch, isFetching, isLoading } = useGetManageVouchers({ params: searchParams })

  useEffect(() => {
    refetch()
  }, [searchParams, keyLoad])

  return (
    <PageLayout title={t('manageVoucher:TITLE_PAGE')}>
      <PageHeader title={t('manageVoucher:TITLE_PAGE')}>
        <PrimaryButton
          onClick={() => setPopAddVoucher(true)}
          icon={<AddIcon />}
          buttonType={PrimaryButtonType.Primary1}
        >
          {t('button:BUTTON.ADD_VOUCHER')}
        </PrimaryButton>
      </PageHeader>
      <Card>
        <Typography.Title level={4} className='!text-red-500'>
          {t('manageVoucher:TITLE_CARD')} {manageVoucherData?.returnValue?.data?.length || 0}
        </Typography.Title>
        <ManageVoucherTable
          data={manageVoucherData?.returnValue?.data || []}
          isFetching={isFetching}
          isLoading={isLoading}
        />
        <TableFooter pagination={manageVoucherData?.returnValue} setSearchParams={setSearchParams} />
      </Card>

      {popAddVoucher && (
        <ModalAddVoucher
          setKeyLoad={() => setKeyLoad(keyLoad + 1)}
          visible={popAddVoucher}
          closed={() => setPopAddVoucher(false)}
        />
      )}
    </PageLayout>
  )
}
