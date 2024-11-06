import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ManageAdmin } from '@/types/manageAdmin.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ManageAdmin>['columns'] = [
  {
    title: i18n.t('manageAdmin:FIELD.NO'),
    dataIndex: 'STT',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageAdmin:FIELD.USER_NAME'),
    dataIndex: 'username',
    render(username) {
      return isDataLoadPage(username) ? <SkeletonRowTable /> : <ColumnEllipsis value={username} />
    },
  },
  {
    title: i18n.t('manageAdmin:FIELD.EMAIL'),
    dataIndex: 'email',
    render(email) {
      return isDataLoadPage(email) ? <SkeletonRowTable /> : <ColumnEllipsis value={email} />
    },
  },
  {
    title: i18n.t('manageAdmin:FIELD.ROLE'),
    dataIndex: 'role',
    render(role) {
      return isDataLoadPage(role) ? <SkeletonRowTable /> : <ColumnEllipsis value={role} />
    },
  },
  {
    title: i18n.t('manageAdmin:FIELD.STATUS'),
    dataIndex: 'status',
    render(status) {
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
  {
    title: i18n.t('manageAdmin:FIELD.ACTION'),
    dataIndex: 'action',
  },
]

type Props = {
  data?: ManageAdmin[]
  isLoading: boolean
  isFetching: boolean
}

export const ManageAdminTable = ({ data, isLoading, isFetching }: Props) => {
  const { t } = useTranslation()

  return (
    <Table
      rowKey='id'
      pagination={false}
      scroll={{ x: 'auto' }}
      locale={{
        emptyText: t('message:INFO.WEB_I_MSG_019'),
      }}
      columns={columns}
      dataSource={isLoading ? generateDefaultData<ManageAdmin>(['id', 'username', 'role', 'email', 'status']) : data}
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
