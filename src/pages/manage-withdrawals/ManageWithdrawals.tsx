/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { Card, DatePicker, message, Tabs } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'

import { useGetManageWithDrawals } from '@/api/manageWithDrawals/useGetManageWithDrawals'
import { TableFooter } from '@/components/common/table/TableFooter'
import { ApprovalRequestWithDrawalsTable } from '@/components/manage-withdrawals/ApprovalRequestWithDrawalsTable'
import { HistoryWithDrawalsTable } from '@/components/manage-withdrawals/HistoryWithDrawalsTable'
import { PageLayout } from '@/layouts/PageLayout'
import { ManageWithDrawalsDTO } from '@/types/manageWithDrawals.type'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const { RangePicker } = DatePicker

export const ManageWithdrawals = () => {
  const { t } = useTranslation()

  const [keyTab, setKeyTab] = useState('1')
  const [searchParams, setSearchParams] = useState<ManageWithDrawalsDTO>()
  // Mapping the tabKey to params
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'months').startOf('month').format('YYYY-MM-DD'))
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'))
  const dateFormat = 'YYYY-MM-DD'

  const changeDate = (date: any, dateString: any) => {
    setStartDate(dateString[0])
    setEndDate(dateString[1])
  }

  const getParams = () => {
    return {
      startDate,
      endDate,
      keyTab,
    }
  }

  const { isLoading, isFetching, data, refetch } = useGetManageWithDrawals({
    params: { ...searchParams, ...getParams() },
  })

  useEffect(() => {
    refetch()
  }, [searchParams])

  useEffect(() => {
    if (data?.returnValue) {
      message.success(t('message:SUCCESS.WEB_S_MSG_001'))
    } else {
      if (data?.message) {
        message.error(t('message:ERROR.WEB_E_MSG_003'))
      }
    }
  }, [data])

  return (
    <PageLayout title={t('manageWithdrawals:TITLE_PAGE')}>
      <PageHeader title={t('manageWithdrawals:TITLE_PAGE')} />
      <Card>
        <Tabs
          onChange={(tab: string) => setKeyTab(tab)}
          tabBarExtraContent={
            <div className='group-search'>
              <RangePicker
                defaultValue={[dayjs().subtract(1, 'months').startOf('month'), dayjs()]}
                format={dateFormat}
                onChange={changeDate}
              />
            </div>
          }
          defaultActiveKey='1'
        >
          <Tabs.TabPane tab={t('manageWithdrawals:TAB_TITLE_WITHDRAWAL_REQUEST')} key='1'>
            <ApprovalRequestWithDrawalsTable
              isFetching={isFetching}
              data={data?.returnValue?.data}
              isLoading={isLoading}
            />
            <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageWithdrawals:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryWithDrawalsTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isFetching} />
            <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
