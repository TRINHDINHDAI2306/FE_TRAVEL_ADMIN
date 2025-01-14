/* eslint-disable prettier/prettier */
import { Button, Space, Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { handleActiveWithdrawals } from '@/api/manageWithDrawals/useGetManageWithDrawals'
import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ManageWithDrawals } from '@/types/manageWithDrawals.type'
import { formatCurrency, generateDefaultData, isDataLoadPage } from '@/utils/common'

type Props = {
  data?: ManageWithDrawals[]
  isLoading: boolean
  isFetching: boolean
  refetch: () => void
}

export const ApprovalRequestWithDrawalsTable = ({ data, isLoading, isFetching, refetch }: Props) => {
  const { t } = useTranslation()

  const columns: TableProps<ManageWithDrawals>['columns'] = [
    {
      title: i18n.t('manageWithdrawals:FIELD.NO'),
      dataIndex: 'STT',
      key: 'transaction_id',
      width: '40px',
      render(_, _record, index) {
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
      title: i18n.t('manageWithdrawals:FIELD.ACTION'),
      dataIndex: 'action',
      key: 'action',
      render(_, record) {
        return isDataLoadPage(record) ? (
          <SkeletonRowTable />
        ) : (
          <Space className='gap-2'>
            <Button type='primary' onClick={() => functionActiveWithdrawals(record)}>
              Phê duyệt
            </Button>
            <Button type='default' onClick={() => functionRejectWithdrawals(record)}>
              Từ chối
            </Button>
          </Space>
        )
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function functionActiveWithdrawals(item: any) {
    const data = await handleActiveWithdrawals({
      withdrawId: item.id,
      action: 'ACCEPT',
    })
    if (data.statusCode === 200) {
      refetch()
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function functionRejectWithdrawals(item: any) {
    const data = await handleActiveWithdrawals({
      withdrawId: item.id,
      action: 'REJECTED',
    })
    if (data.statusCode === 200) {
      refetch()
    }
  }

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
