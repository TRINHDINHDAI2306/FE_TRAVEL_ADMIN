/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { Card, DatePicker, message, Tabs } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'

import {
  useGetManageWithDrawals,
  useGetManageWithDrawalsWaiting,
} from '@/api/manageWithDrawals/useGetManageWithDrawals'
import { TableFooter } from '@/components/common/table/TableFooter'
import { ApprovalRequestWithDrawalsTable } from '@/components/manage-withdrawals/ApprovalRequestWithDrawalsTable'
import { HistoryWithDrawalsTable } from '@/components/manage-withdrawals/HistoryWithDrawalsTable'
import { PageLayout } from '@/layouts/PageLayout'
import { ManageWithDrawals, ManageWithDrawalsDTO } from '@/types/manageWithDrawals.type'
import dayjs from 'dayjs'
import { map } from 'lodash-es'
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

  const {
    isLoading: isLoadingWithDrawals,
    isFetching: isFetchingWithDrawals,
    data,
    refetch: refetchWithDrawals,
  } = useGetManageWithDrawals({
    params: { ...searchParams, ...getParams() },
  })

  const {
    isLoading,
    isFetching,
    data: withDrawalsWaitingData,
    refetch,
  } = useGetManageWithDrawalsWaiting({
    params: { ...searchParams, ...getParams() },
  })

  const transformWithdrawal = (data?: any[]): ManageWithDrawals[] =>
    map(data, (item) => ({
      transaction_id: item.id,
      transaction_transaction_code: item.transactionCode,
      transaction_amount: item.amount,
      transaction_time: item.time,
      transaction_status: Number(item.status),
      transaction_type: item.type,
      transaction_admin_id: 0,
      transaction_user_id: item.user.id,
      transaction_tourguide_id: item.tourGuide ? item.tourGuide.id : null,
      user_id: item.user.id,
      user_password: item.user.password,
      user_email: item.user.email,
      user_username: item.user.username,
      user_phone: item.user.phone,
      user_balance: item.user.balance,
      user_available_balance: item.user.availableBalance,
      user_voucher_point: item.user.voucherPoint,
      user_avartar: item.user.avatar,
      user_status: Number(item.user.verifyStatus),
      user_isSetup: item.user.isSetup,
      user_created_at: item.user.createdAt,
      user_updated_at: item.user.updatedAt,
      user_deleted_at: item.user.deletedAt,
      tourGuide_id: item.tourGuide ? item.tourGuide.id : null,
      tourGuide_password: item.tourGuide ? item.tourGuide.password : null,
      tourGuide_email: item.tourGuide ? item.tourGuide.email : null,
      tourGuide_name: item.tourGuide ? item.tourGuide.name : null,
      tourGuide_username: item.tourGuide ? item.tourGuide.username : null,
      tourGuide_phone: item.tourGuide ? item.tourGuide.phone : null,
      tourGuide_bio: item.tourGuide ? item.tourGuide.bio : null,
      tourGuide_gender: item.tourGuide ? item.tourGuide.gender : null,
      tourGuide_balance: item.tourGuide ? item.tourGuide.balance : null,
      tourGuide_available_balance: item.tourGuide ? item.tourGuide.availableBalance : null,
      tourGuide_avartar: item.tourGuide ? item.tourGuide.avatar : null,
      tourGuide_status: item.tourGuide ? item.tourGuide.status : null,
      tourGuide_available: item.tourGuide ? item.tourGuide.available : null,
      tourGuide_num_of_favorites: item.tourGuide ? item.tourGuide.num_of_favorites : null,
      tourGuide_cancelled_orders: item.tourGuide ? item.tourGuide.cancelled_orders : null,
      tourGuide_warning_time: item.tourGuide ? item.tourGuide.warning_time : null,
      tourGuide_dob: item.tourGuide ? item.tourGuide.dob : null,
      tourGuide_interview_date: item.tourGuide ? item.tourGuide.interview_date : null,
      tourGuide_created_at: item.tourGuide ? item.tourGuide.created_at : null,
      tourGuide_updated_at: item.tourGuide ? item.tourGuide.updated_at : null,
      tourGuide_deleted_at: item.tourGuide ? item.tourGuide.deleted_at : null,
    }))

  const transformedData = transformWithdrawal(withDrawalsWaitingData?.returnValue?.data)

  useEffect(() => {
    refetch()
    refetchWithDrawals()
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
              data={transformedData}
              refetch={refetch}
              isLoading={isLoading}
            />
            <TableFooter pagination={withDrawalsWaitingData?.returnValue} setSearchParams={setSearchParams} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageWithdrawals:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryWithDrawalsTable
              isFetching={isFetchingWithDrawals}
              data={data?.returnValue?.data}
              isLoading={isLoadingWithDrawals}
            />
            <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
