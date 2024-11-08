import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { PendingInterviewGuide } from '@/types/manageGuide.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<PendingInterviewGuide>['columns'] = [
  {
    title: i18n.t('manageGuide:FIELD.NO'),
    dataIndex: 'STT',
    width: '40px',
    key: 'id',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.DATE_INTERVIEW'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    render(createdAt) {
      return isDataLoadPage(createdAt) ? <SkeletonRowTable /> : <ColumnEllipsis value={createdAt} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.USER_NAME'),
    dataIndex: 'username',
    key: 'username',
    render(username) {
      return isDataLoadPage(username) ? <SkeletonRowTable /> : <ColumnEllipsis value={username} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.EMAIL'),
    dataIndex: 'email',
    key: 'email',
    render(email) {
      return isDataLoadPage(email) ? <SkeletonRowTable /> : <ColumnEllipsis value={email} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.PROVINCE'),
    dataIndex: 'provice',
    key: 'provice',
    render(provice) {
      return isDataLoadPage(provice) ? <SkeletonRowTable /> : <ColumnEllipsis value={provice} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.DATE_INTERVIEW'),
    dataIndex: 'interviewDate',
    key: 'interviewDate',
    render(interviewDate) {
      return isDataLoadPage(interviewDate) ? <SkeletonRowTable /> : <ColumnEllipsis value={interviewDate} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.APPROVAL_USER'),
    dataIndex: 'approvedBy',
    key: 'approvedBy',
    render(approvedBy) {
      return isDataLoadPage(approvedBy) ? <SkeletonRowTable /> : <ColumnEllipsis value={approvedBy} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.ACTION'),
    dataIndex: 'action',
    key: 'action',
  },
]

type Props = {
  data?: PendingInterviewGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const PendingInterviewGuideTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<PendingInterviewGuide>([
              'id',
              'createdAt',
              'username',
              'provice',
              'email',
              'approvalBy',
              'interviewDate',
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
