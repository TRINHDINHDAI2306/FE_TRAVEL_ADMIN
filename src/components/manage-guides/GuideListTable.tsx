import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ListGuide } from '@/types/manageGuide.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<ListGuide>['columns'] = [
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
    title: i18n.t('manageGuide:FIELD.DATE_ACTIVE'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    render(createdAt) {
      return isDataLoadPage(createdAt) ? <SkeletonRowTable /> : <ColumnEllipsis value={createdAt} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.FULL_NAME'),
    dataIndex: 'name',
    key: 'name',
    render(name) {
      return isDataLoadPage(name) ? <SkeletonRowTable /> : <ColumnEllipsis value={name} />
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
    title: i18n.t('manageGuide:FIELD.PHONE'),
    dataIndex: 'phone',
    key: 'phone',
    render(phone) {
      return isDataLoadPage(phone) ? <SkeletonRowTable /> : <ColumnEllipsis value={phone} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.TOUR'),
    dataIndex: 'tour',
    key: 'tour',
    render(tour) {
      return isDataLoadPage(tour) ? <SkeletonRowTable /> : <ColumnEllipsis value={tour} />
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
    title: i18n.t('manageGuide:FIELD.TRADE_AMOUNT'),
    dataIndex: 'money',
    key: 'money',
    render(money) {
      return isDataLoadPage(money) ? <SkeletonRowTable /> : <ColumnEllipsis value={money} />
    },
  },
  {
    title: i18n.t('manageGuide:FIELD.STATUS'),
    dataIndex: 'status',
    key: 'status',
    render(status) {
      return isDataLoadPage(status) ? <SkeletonRowTable /> : <ColumnEllipsis value={status} />
    },
  },
]

type Props = {
  data?: ListGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const GuideListTable = ({ data, isLoading, isFetching }: Props) => {
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
          ? generateDefaultData<ListGuide>([
              'id',
              'name',
              'createdAt',
              'email',
              'money',
              'phone',
              'provice',
              'status',
              'tour',
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
