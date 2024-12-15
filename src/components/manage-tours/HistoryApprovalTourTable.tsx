import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { HistoryApprovalTour } from '@/types/manageTour.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<HistoryApprovalTour>['columns'] = [
  {
    title: i18n.t('manageTour:FIELD.NO'),
    dataIndex: 'STT',
    key: 'id',
    width: '40px',
    render(_, record, index) {
      return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.TIME_APPROVAL'),
    dataIndex: 'time',
    key: 'time',
    render(time) {
      return isDataLoadPage(time) ? <SkeletonRowTable /> : <ColumnEllipsis value={time} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.TOUR_NAME'),
    dataIndex: 'name',
    key: 'name',
    render(name) {
      return isDataLoadPage(name) ? <SkeletonRowTable /> : <ColumnEllipsis value={name} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.GUIDE'),
    dataIndex: 'nameGuide',
    key: 'nameGuide',
    render(nameGuide) {
      return isDataLoadPage(nameGuide) ? <SkeletonRowTable /> : <ColumnEllipsis value={nameGuide} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.PROVINCE'),
    dataIndex: 'provice',
    key: 'provice',
    render(provice) {
      return isDataLoadPage(provice) ? <SkeletonRowTable /> : <ColumnEllipsis value={provice} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.STATUS'),
    dataIndex: 'status',
    key: 'status',
    render(isStatus) {
      const status =
        isStatus == 1
          ? i18n.t('manageUser:MODAL_MANAGE_ADMIN.ACTIVE')
          : i18n.t('manageUser:MODAL_MANAGE_ADMIN.INACTIVE')
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
  {
    title: i18n.t('manageTour:FIELD.APPROVAL_USER'),
    dataIndex: 'approvedBy',
    key: 'approvedBy',
    render(approvedBy) {
      return isDataLoadPage(approvedBy) ? <SkeletonRowTable /> : <ColumnEllipsis value={approvedBy} />
    },
  },
]

type Props = {
  data?: HistoryApprovalTour[]
  isLoading: boolean
  isFetching: boolean
}

export const HistoryApprovalTourTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<HistoryApprovalTour>([
              'id',
              'name',
              'nameGuide',
              'time',
              'approvedBy',
              'status',
              'provice',
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
