/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { HistoryBlog } from '@/types/manageBlog.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<HistoryBlog>['columns'] = [
  {
    title: i18n.t('manageBlog:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageBlog:FIELD.CREATE_DATE'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    render(createdAt) {
      return isDataLoadPage(createdAt) ? <SkeletonRowTable /> : <ColumnEllipsis value={createdAt} />
    },
  },
  {
    title: i18n.t('manageBlog:FIELD.TITLE'),
    dataIndex: 'title',
    key: 'title',
    render(title) {
      return isDataLoadPage(title) ? <SkeletonRowTable /> : <ColumnEllipsis value={title} />
    },
  },
  {
    title: i18n.t('manageBlog:FIELD.AUTHOR'),
    dataIndex: ['user', 'username'],
    key: 'user',
    render(user) {
      return isDataLoadPage(user) ? <SkeletonRowTable /> : <ColumnEllipsis value={user} />
    },
  },
  {
    title: i18n.t('manageBlog:FIELD.STATUS'),
    dataIndex: 'status',
    key: 'status',
    render(status) {
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
  {
    title: i18n.t('manageBlog:FIELD.APPROVAL_USER'),
    dataIndex: 'approvedBy',
    key: 'approvedBy',
    render(approvedBy) {
      return isDataLoadPage(approvedBy) ? <SkeletonRowTable /> : <ColumnEllipsis value={approvedBy} />
    },
  },
]

type Props = {
  data?: HistoryBlog[]
  isLoading: boolean
  isFetching: boolean
}

export const HistoryApprovalBlogsTable = ({ data, isLoading, isFetching }: Props) => {
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
      dataSource={isLoading ? generateDefaultData<HistoryBlog>(['id', 'title', 'user', 'time', 'status']) : data}
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
