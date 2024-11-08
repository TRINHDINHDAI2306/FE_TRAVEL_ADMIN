import { Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { RejectedGuide } from '@/types/manageGuide.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

const columns: TableProps<RejectedGuide>['columns'] = [
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
    title: i18n.t('manageGuide:FIELD.TIME_REJECT'),
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
]

type Props = {
  data?: RejectedGuide[]
  isLoading: boolean
  isFetching: boolean
}

export const RejectGuideTable = ({ data, isLoading, isFetching }: Props) => {
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
      dataSource={isLoading ? generateDefaultData<RejectedGuide>(['id', 'name', 'createdAt', 'email']) : data}
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
