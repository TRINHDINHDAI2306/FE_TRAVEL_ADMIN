/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ApprovalRequestBlog } from '@/types/reportBlog.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ApprovalRequestBlog>['columns'] = [
  {
    title: i18n.t('reportPost:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('reportPost:FIELD.CREATE_DATE'),
    dataIndex: 'time',
    key: 'time',
    render(time) {
      return isDataLoadPage(time) ? <SkeletonRowTable /> : <ColumnEllipsis value={time} />
    },
  },
  {
    title: i18n.t('reportPost:FIELD.TITLE'),
    dataIndex: 'title',
    key: 'title',
    render(title) {
      return isDataLoadPage(title) ? <SkeletonRowTable /> : <ColumnEllipsis value={title} />
    },
  },
  {
    title: i18n.t('reportPost:FIELD.NOTE'),
    dataIndex: 'note',
    key: 'note',
    render(note) {
      return isDataLoadPage(note) ? <SkeletonRowTable /> : <ColumnEllipsis value={note} />
    },
  },
  {
    title: i18n.t('reportPost:FIELD.AUTHOR'),
    dataIndex: ['user', 'username'],
    key: 'user',
    render(user) {
      return isDataLoadPage(user) ? <SkeletonRowTable /> : <ColumnEllipsis value={user} />
    },
  },
  // {
  //   title: i18n.t('reportPost:FIELD.ACTION'),
  //   dataIndex: 'action',
  //   key: 'action',
  // },
]

type Props = {
  data?: ApprovalRequestBlog[]
  isLoading: boolean
  isFetching: boolean
}

export const ApprovalRequestReportBlogTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ApprovalRequestBlog>(['id', 'time', 'title', 'user', 'note'])
          : data?.filter((item) => item.status == 0)
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
