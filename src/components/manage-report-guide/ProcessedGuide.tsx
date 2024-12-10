/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ProcessedGuide } from '@/types/manageGuideReport.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ProcessedGuide>['columns'] = [
  {
    title: i18n.t('reportGuide:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.CREATE_DATE'),
    dataIndex: 'time',
    key: 'time',
    render(time) {
      return isDataLoadPage(time) ? <SkeletonRowTable /> : <ColumnEllipsis value={time} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.MEETING_DATE'),
    dataIndex: 'meetingDate',
    key: 'meetingDate',
    render(meetingDate) {
      return isDataLoadPage(meetingDate) ? <SkeletonRowTable /> : <ColumnEllipsis value={meetingDate} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.ORDER'),
    dataIndex: ['order', 'name'],
    key: 'order',
    render(order) {
      return isDataLoadPage(order) ? <SkeletonRowTable /> : <ColumnEllipsis value={order} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.CONTENT'),
    dataIndex: 'content',
    key: 'content',
    render(content) {
      return isDataLoadPage(content) ? <SkeletonRowTable /> : <ColumnEllipsis value={content} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.STATUS'),
    dataIndex: 'status',
    key: 'status',
    render(status) {
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
  {
    title: i18n.t('reportGuide:FIELD.REPORT_BY'),
    dataIndex: ['reportedBy', 'username'],
    key: 'reportedBy',
    render(reportedBy) {
      return isDataLoadPage(reportedBy) ? <SkeletonRowTable /> : <ColumnEllipsis value={reportedBy} />
    },
  },
]

type Props = {
  data?: ProcessedGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const ProcessedGuideTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ProcessedGuide>([
              'id',
              'time',
              'status',
              'content',
              'order',
              'reportedBy',
              'meetingDate',
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
