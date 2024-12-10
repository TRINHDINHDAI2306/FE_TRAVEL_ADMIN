/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { Card, message, Tabs } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'

import { PageLayout } from '@/layouts/PageLayout'
import { StatusGuideReport } from '@/types/enum'
import { useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useGetManageReportGuides } from '@/api/manageReportGuide/useGeReportGuide'
import { ReportGuideTable } from '@/components/manage-report-guide/ReportGuide'
import { ProcessingGuideTable } from '@/components/manage-report-guide/ProcessingGuide'
import { ProcessedGuideTable } from '@/components/manage-report-guide/ProcessedGuide'
import { ManageGuideReportDTO } from '@/types/manageGuideReport.type'
import { TableFooter } from '@/components/common/table/TableFooter'
export const ManageGuidesReport = () => {
  const { t } = useTranslation()

  const [searchParams, setSearchParams] = useState<ManageGuideReportDTO>()
  const [tabKey, setTabKey] = useState('1')

  // Mapping the tabKey to params
  const getParamsByTabKey = (key: string) => {
    switch (key) {
      case '1':
        return { status: StatusGuideReport.REPORT, type: 'ReportGuide' }
      case '2':
        return { status: StatusGuideReport.REPORT, type: 'ProcessingGuide' }
      case '3':
        return { status: StatusGuideReport.PROCESSED, type: 'ProcessedGuide' }
      default:
        return { status: '', type: '' } // Default params
    }
  }

  // Fetching data based on the tabKey
  const { isLoading, isFetching, data, refetch } = useGetManageReportGuides({
    params: {...searchParams, ...getParamsByTabKey(tabKey)},
  })

  useEffect(() => {
    refetch()
  }, [searchParams])

  useEffect(() => {
    if(data?.returnValue){
      message.success(t('message:SUCCESS.WEB_S_MSG_001'))
    } else {
      if(data?.message){
        message.error(t('message:ERROR.WEB_E_MSG_003'))
      }
    }
  }, [data])

  return (
    <PageLayout title={t('reportGuide:TITLE_PAGE')}>
      <PageHeader title={t('reportGuide:TITLE_PAGE')} />
      <Card>
        <Tabs
          onChange={(e: string) => {
            setTabKey(e)
          }}
          defaultActiveKey='1'
        >
          <Tabs.TabPane tab={t('reportGuide:TAB_TITLE_TOUR_GUIDE_REPORT')} key='1'>
            <ReportGuideTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isLoading} />
            {data?.returnValue && <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />}
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('reportGuide:TAB_TITLE_TOUR_GUIDE_PROCESSING')} key='2'>
            <ProcessingGuideTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isFetching} />
            {data?.returnValue && <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />}
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('reportGuide:TAB_TITLE_TOUR_GUIDE_PROCESSED')} key='3'>
            <ProcessedGuideTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isLoading} />
            {data?.returnValue && <TableFooter pagination={data?.returnValue} setSearchParams={setSearchParams} />}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
