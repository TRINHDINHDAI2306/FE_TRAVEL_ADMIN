/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import { Card, message, Tabs } from 'antd'

import { useGetManagerTourApproveGuides, useGetManagerTourGuides } from '@/api/manageTour/useManagerTour'
import { PageHeader } from '@/components/common/PageHeader'
import { ApprovalRequestTourTable } from '@/components/manage-tours/ApprovalRequestTourTable'
import { HistoryApprovalTourTable } from '@/components/manage-tours/HistoryApprovalTourTable'
import { ListTourTable } from '@/components/manage-tours/ListTourTable'
import { PageLayout } from '@/layouts/PageLayout'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ManageTour = () => {
  const { t } = useTranslation()

  const [tabKey, setTabKey] = useState('1')

  const approveGuides = useGetManagerTourApproveGuides({ params: {} })
  const tourGuides = useGetManagerTourGuides({ params: {} })
  // Fetching data based on the tabKey
  const { isLoading, isFetching, data, refetch } = tabKey === '1' ? approveGuides : tourGuides

  useEffect(() => {
    refetch()
  }, [tabKey])

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
    <PageLayout title={t('manageTour:TITLE_PAGE')}>
      <PageHeader title={t('manageTour:TITLE_PAGE')} />
      <Card>
        <Tabs onChange={(tab) => setTabKey(tab)} defaultActiveKey='1'>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_APPROVAL_REQUEST')} key='1'>
            <ApprovalRequestTourTable
              data={
                data?.returnValue?.data
                  ? data?.returnValue.data.map((e: any, index: number) => {
                      return {
                        ...e,
                        province: e.province?.name ? e.province?.name : '',
                        stt: index,
                        time: new Date(e.createdAt).toLocaleString(),
                        nameGuide: e.tourGuide?.username,
                      }
                    })
                  : []
              }
              isLoading={false}
              isFetching={false}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryApprovalTourTable
              data={
                data?.returnValue?.data
                  ? data?.returnValue.data.map((e: any, index: number) => {
                      return {
                        ...e,
                        stt: index + 1,
                        time: new Date(e.createdAt).toLocaleString(),
                        nameGuide: e.tourGuide?.name,
                      }
                    })
                  : []
              }
              isLoading={false}
              isFetching={false}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_TOUR_LIST')} key='3'>
            <ListTourTable
              data={
                data?.returnValue?.data
                  ? data?.returnValue.data.map((e: any, index: number) => {
                      return {
                        ...e,
                        stt: index + 1,
                        time: new Date(e.createdAt).toLocaleString(),
                        nameGuide: e.tourGuide?.name,
                      }
                    })
                  : []
              }
              isLoading={false}
              isFetching={false}
            />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
