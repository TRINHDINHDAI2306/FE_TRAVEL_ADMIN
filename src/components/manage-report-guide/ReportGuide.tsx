/* eslint-disable prettier/prettier */
import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ReportGuide } from '@/types/manageGuideReport.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ReportGuide>['columns'] = [
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
    title: i18n.t('reportGuide:FIELD.TIME_START'),
    dataIndex: 'time',
    key: 'time',
    render(time) {
      return isDataLoadPage(time) ? <SkeletonRowTable /> : <ColumnEllipsis value={time} />
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
  {
    title: i18n.t('reportGuide:FIELD.REPORT_BY'),
    dataIndex: 'reportNum',
    key: 'reportNum',
    render(reportNum) {
      return isDataLoadPage(reportNum) ? <SkeletonRowTable /> : <ColumnEllipsis value={reportNum} />
    },
  },
]

type Props = {
  data?: ReportGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const ReportGuideTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ReportGuide>(['id', 'time', 'title', 'content', 'order', 'reportNum', 'reportedBy'])
          : data
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
