/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { Card, Tabs, DatePicker, message } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'

import { PageLayout } from '@/layouts/PageLayout'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetReportBlogs } from '@/api/reportBlogs/useGetReportBlogs'
import { ApprovalRequestReportBlogTable } from '@/components/report-blog/ApprovalRequestReportBlogTable'
import { HistoryReportBlogsTable } from '@/components/report-blog/HistoryApprovalReportBlogTable'
import { TableFooter } from '@/components/common/table/TableFooter'
import dayjs from 'dayjs'
import { ReportBlogDTO } from '@/types/reportBlog.type'

const { RangePicker } = DatePicker

export const ManageReportBlog = () => {
  const { t } = useTranslation()
  const [keyTab, setKeyTab] = useState('1')
  // Mapping the tabKey to params
  const [searchParams, setSearchParams] = useState<ReportBlogDTO>()
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'months').startOf('month').format('YYYY-MM-DD'))
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'))
  const dateFormat = 'YYYY-MM-DD'
  const getParams = () => {
    return {
      startDate,
      endDate,
      keyTab,
    }
  }
  const { isLoading, isFetching, data, refetch } = useGetReportBlogs({
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

  const changeDate = (date: any, dateString: any) => {
    setStartDate(dateString[0])
    setEndDate(dateString[1])
  }

  return (
    <PageLayout title={t('reportPost:TITLE_PAGE')}>
      <PageHeader title={t('reportPost:TITLE_PAGE')} />
      <Card>
        <Tabs
          onChange={(tab: string) => setKeyTab(tab)}
          tabBarExtraContent={
            <RangePicker
              defaultValue={[dayjs().subtract(1, 'months').startOf('month'), dayjs()]}
              format={dateFormat}
              onChange={changeDate}
            />
          }
          defaultActiveKey='1'
        >
          <Tabs.TabPane tab={t('reportPost:TAB_TITLE_REPORT_POST')} key='1'>
            <ApprovalRequestReportBlogTable
              isFetching={isFetching}
              data={data?.returnValue?.data}
              isLoading={isLoading}
            />
            {data?.returnValue && <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />}
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('reportPost:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryReportBlogsTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isFetching} />
            {data?.returnValue && <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
