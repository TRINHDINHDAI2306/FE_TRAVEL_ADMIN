import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { VoucherList } from '@/types/manageVoucher.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<VoucherList>['columns'] = [
  {
    title: i18n.t('manageVoucher:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.NAME_VOUCHER'),
    dataIndex: 'name',
    key: 'name',
    render(name) {
      return isDataLoadPage(name) ? <SkeletonRowTable /> : <ColumnEllipsis value={name} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.CODE_VOUCHER'),
    dataIndex: 'code',
    key: 'code',
    render(code) {
      return isDataLoadPage(code) ? <SkeletonRowTable /> : <ColumnEllipsis value={code} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.TYPE_CODE'),
    dataIndex: 'discountType',
    key: 'discountType',
    render(discountType) {
      return isDataLoadPage(discountType) ? <SkeletonRowTable /> : <ColumnEllipsis value={discountType} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.VALUE'),
    dataIndex: 'value',
    key: 'value',
    render(value) {
      return isDataLoadPage(value) ? <SkeletonRowTable /> : <ColumnEllipsis value={value} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.START_DATE'),
    dataIndex: 'startDate',
    key: 'startDate',
    render(startDate) {
      return isDataLoadPage(startDate) ? <SkeletonRowTable /> : <ColumnEllipsis value={startDate} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.END_DATE'),
    dataIndex: 'endDate',
    key: 'endDate',
    render(endDate) {
      return isDataLoadPage(endDate) ? <SkeletonRowTable /> : <ColumnEllipsis value={endDate} />
    },
  },
  {
    title: i18n.t('manageVoucher:FIELD.COUNT'),
    dataIndex: 'quantity',
    key: 'quantity',
    render(quantity) {
      return isDataLoadPage(quantity) ? <SkeletonRowTable /> : <ColumnEllipsis value={quantity} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.ACTION'),
    dataIndex: 'action',
    key: 'action',
  },
]

type Props = {
  data?: VoucherList[]
  isLoading: boolean
  isFetching: boolean
}

export const ManageVoucherTable = ({ data, isLoading, isFetching }: Props) => {
  const { t } = useTranslation()

  return (
    <Table
      rowKey='id'
      pagination={false}
      scroll={{ x: 'auto' }}
      locale={{
        emptyText: t('message:INFO.WEB_I_MSG_001'),
      }}
      columns={columns}
      dataSource={
        isLoading
          ? generateDefaultData<VoucherList>([
              'id',
              'name',
              'code',
              'discountType',
              'startDate',
              'endDate',
              'value',
              'quantity',
            ])
          : data
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
