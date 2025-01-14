/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { TransactionStatus } from '@/types/enum'
import { ManageWithDrawals } from '@/types/manageWithDrawals.type'
import { formatCurrency, generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ManageWithDrawals>['columns'] = [
  {
    title: i18n.t('manageWithdrawals:FIELD.NO'),
    dataIndex: 'STT',
    key: 'transaction_id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageWithdrawals:FIELD.CREATE_DATE'),
    dataIndex: 'transaction_time',
    key: 'transaction_time',
    render(transaction_time) {
      return isDataLoadPage(transaction_time) ? <SkeletonRowTable /> : <ColumnEllipsis value={transaction_time} />
    },
  },
  {
    title: i18n.t('manageWithdrawals:FIELD.TITLE'),
    dataIndex: 'transaction_transaction_code',
    key: 'transaction_transaction_code',
    render(transaction_transaction_code) {
      return isDataLoadPage(transaction_transaction_code) ? (
        <SkeletonRowTable />
      ) : (
        <ColumnEllipsis value={transaction_transaction_code} />
      )
    },
  },
  {
    title: i18n.t('manageWithdrawals:FIELD.AMOUNT'),
    dataIndex: 'transaction_amount',
    key: 'transaction_amount',
    render(transaction_amount) {
      return isDataLoadPage(transaction_amount) ? (
        <SkeletonRowTable />
      ) : (
        <ColumnEllipsis value={transaction_amount ? formatCurrency(transaction_amount) : ''} />
      )
    },
  },
  {
    title: i18n.t('manageWithdrawals:FIELD.AUTHOR'),
    dataIndex: 'user_username',
    key: 'user_username',
    render: (user_username, { tourGuide_username }) => {
      return isDataLoadPage(user_username) ? (
        <SkeletonRowTable />
      ) : (
        <ColumnEllipsis value={user_username || tourGuide_username} />
      )
    },
  },
  {
    title: i18n.t('manageWithdrawals:FIELD.STATUS'),
    dataIndex: 'transaction_status',
    key: 'transaction_status',
    render(isStatus) {
      let transaction_status = ''

      switch (isStatus) {
        case TransactionStatus.SUCCESS:
          transaction_status = i18n.t('manageWithdrawals:FIELD.SUCCESS')
          break
        case TransactionStatus.FAILED:
          transaction_status = i18n.t('manageWithdrawals:FIELD.FAILED')
          break
        case TransactionStatus.VNPAY_PENDING:
          transaction_status = i18n.t('manageWithdrawals:FIELD.VNPAY_PENDING')
          break
        case TransactionStatus.WAITING:
          transaction_status = i18n.t('manageWithdrawals:FIELD.WAITING')
          break
      }
      return isDataLoadPage(transaction_status) ? <SkeletonRowTable /> : <ColumnEllipsis value={transaction_status} />
    },
  },
]

type Props = {
  data?: ManageWithDrawals[]
  isLoading: boolean
  isFetching: boolean
}

export const HistoryWithDrawalsTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ManageWithDrawals>([
              'transaction_id',
              'transaction_transaction_code',
              'user_username',
              'transaction_time',
              'transaction_status',
              'tourGuide_username',
              'transaction_amount',
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
