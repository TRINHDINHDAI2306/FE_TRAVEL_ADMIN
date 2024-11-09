import { Card, Tabs } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'
import { ApprovalRequestTourTable } from '@/components/manage-tours/ApprovalRequestTourTable'
import { HistoryApprovalTourTable } from '@/components/manage-tours/HistoryApprovalTourTable'
import { ListTourTable } from '@/components/manage-tours/ListTourTable'
import { PageLayout } from '@/layouts/PageLayout'
import { useTranslation } from 'react-i18next'

export const ManageTour = () => {
  const { t } = useTranslation()
  return (
    <PageLayout title={t('manageTour:TITLE_PAGE')}>
      <PageHeader title={t('manageTour:TITLE_PAGE')} />
      <Card>
        <Tabs defaultActiveKey='1'>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_APPROVAL_REQUEST')} key='1'>
            <ApprovalRequestTourTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryApprovalTourTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageTour:TAB_TITLE_TOUR_LIST')} key='3'>
            <ListTourTable />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
