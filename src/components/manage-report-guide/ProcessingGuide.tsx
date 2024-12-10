/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'
import { ProcessingGuide } from '@/types/manageGuideReport.type'

const columns: TableProps<ProcessingGuide>['columns'] = [
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
    title: i18n.t('reportGuide:FIELD.REPORT_BY'),
    dataIndex: 'reportNum',
    key: 'reportNum',
    render(reportNum) {
      return isDataLoadPage(reportNum) ? <SkeletonRowTable /> : <ColumnEllipsis value={reportNum} />
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
  data?: ProcessingGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const ProcessingGuideTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ProcessingGuide>([
              'id',
              'time',
              'title',
              'order',
              'meetingDate',
              'reportNum',
              'reportedBy',
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
