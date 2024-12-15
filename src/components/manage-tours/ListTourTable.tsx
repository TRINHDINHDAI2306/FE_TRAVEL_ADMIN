import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ListTour } from '@/types/manageTour.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ListTour>['columns'] = [
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
    title: i18n.t('manageTour:FIELD.CREATE_DATE'),
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
    title: i18n.t('manageUser:FIELD.ACTION'),
    dataIndex: 'action',
    key: 'action',
  },
]

type Props = {
  data?: ListTour[]
  isLoading: boolean
  isFetching: boolean
}

export const ListTourTable = ({ data, isLoading, isFetching }: Props) => {
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
        isLoading ? generateDefaultData<ListTour>(['id', 'name', 'nameGuide', 'provice', 'time', 'status']) : data
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
