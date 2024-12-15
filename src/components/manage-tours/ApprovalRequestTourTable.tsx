import { Button, Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { handleActiveTours } from '@/api/manageTour/useManagerTour'
import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ApprovalRequestTour } from '@/types/manageTour.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'

type Props = {
  data?: ApprovalRequestTour[]
  isLoading: boolean
  isFetching: boolean
  refetch: () => void
}

export const ApprovalRequestTourTable = ({ data, isLoading, isFetching, refetch }: Props) => {
  const { t } = useTranslation()

  const columns: TableProps<ApprovalRequestTour>['columns'] = [
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
      title: i18n.t('manageTour:FIELD.TIME_REQUEST'),
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
      dataIndex: 'province',
      key: 'province',
      render(province) {
        return isDataLoadPage(province) ? <SkeletonRowTable /> : <ColumnEllipsis value={province} />
      },
    },
    {
      title: i18n.t('manageUser:FIELD.ACTION'),
      dataIndex: 'action',
      key: 'action',
      render(_, record) {
        return isDataLoadPage(record) ? (
          <SkeletonRowTable />
        ) : (
          <>
            <Button type='primary' onClick={() => functionApprovalTour(record)}>
              Phê duyệt
            </Button>
            <Button type='dashed' onClick={() => functionRejectTour(record)} className='ml-4'>
              Từ chối
            </Button>
          </>
        )
      },
    },
  ]

  async function functionApprovalTour(item: ApprovalRequestTour) {
    const data = await handleActiveTours({
      tourId: item.id,
      action: 'APPROVE',
    })
    if (data.statusCode === 200) {
      refetch()
    }
  }

  async function functionRejectTour(item: ApprovalRequestTour) {
    const data = await handleActiveTours({
      tourId: item.id,
      action: 'REJECT',
    })
    if (data.statusCode === 200) {
      refetch()
    }
  }

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
        isLoading ? generateDefaultData<ApprovalRequestTour>(['id', 'name', 'nameGuide', 'province', 'time']) : data
      }
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
