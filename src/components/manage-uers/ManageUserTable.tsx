import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ManageUser } from '@/types/manageUser.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ManageUser>['columns'] = [
  {
    title: i18n.t('manageUser:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.USER_NAME'),
    dataIndex: 'username',
    key: 'username',
    render(username) {
      return isDataLoadPage(username) ? <SkeletonRowTable /> : <ColumnEllipsis value={username} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.EMAIL'),
    dataIndex: 'email',
    key: 'email',
    render(email) {
      return isDataLoadPage(email) ? <SkeletonRowTable /> : <ColumnEllipsis value={email} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.PHONE'),
    dataIndex: 'phone',
    key: 'phone',
    render(phone) {
      return isDataLoadPage(phone) ? <SkeletonRowTable /> : <ColumnEllipsis value={[phone]} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.STATUS'),
    dataIndex: 'status',
    key: 'status',
    render(status) {
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
  {
    title: i18n.t('manageUser:FIELD.ACTION'),
    dataIndex: 'action',
    key: 'action',
  },
]

type Props = {
  data?: ManageUser[]
  isLoading: boolean
  isFetching: boolean
}

export const ManageUserTable = ({ data, isLoading, isFetching }: Props) => {
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
        isLoading ? generateDefaultData<ManageUser>(['id', 'username', 'phone', 'email', 'verifyStatus']) : data
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
