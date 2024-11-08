import { Card, Tabs } from 'antd'
import { useTranslation } from 'react-i18next'

import { useGetManageGuides } from '@/api/manageGuides/useGuideList'
import { PageHeader } from '@/components/common/PageHeader'
import { ApprovalRequestGuideTable } from '@/components/manage-guides/ApprovalRequestGuideTable'
import { GuideListTable } from '@/components/manage-guides/GuideListTable'
import { PendingInterviewGuideTable } from '@/components/manage-guides/PendingInterviewGuideTable'
import { RejectGuideTable } from '@/components/manage-guides/RejectedGuideTable'
import { PageLayout } from '@/layouts/PageLayout'
import { StatusGuide } from '@/types/enum'

export const ManageGuide = () => {
  const { t } = useTranslation()

  const {
    data: approvalData,
    isLoading: isLoadingApproval,
    isFetching: isFetchingApproval,
  } = useGetManageGuides({
    params: { status: StatusGuide.PENDING, type: 'ApprovalRequestGuide' },
  })

  const {
    data: interviewData,
    isLoading: isLoadingInterview,
    isFetching: isFetchingInterview,
  } = useGetManageGuides({
    params: { status: StatusGuide.WAITING_INTERVIEW, type: 'PendingInterviewGuide' },
  })

  const {
    data: rejectedData,
    isLoading: isLoadingRejected,
    isFetching: isFetchingRejected,
  } = useGetManageGuides({
    params: { status: StatusGuide.REJECTED, type: 'RejectedGuide' },
  })

  const {
    data: listData,
    isLoading: isLoadingList,
    isFetching: isFetchingList,
  } = useGetManageGuides({
    params: { status: StatusGuide.ACTIVE, type: 'ListGuide' },
  })

  return (
    <PageLayout title={t('manageUser:TITLE_PAGE')}>
      <PageHeader title={t('manageUser:TITLE_PAGE')} />
      <Card>
        <Tabs defaultActiveKey='1'>
          <Tabs.TabPane tab={t('manageGuide:TAB_TITLE_APPROVAL_REQUEST')} key='1'>
            <ApprovalRequestGuideTable
              data={approvalData?.returnValue?.data}
              isFetching={isFetchingApproval}
              isLoading={isLoadingApproval}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageGuide:TAB_TITLE_PENDING_INTERVIEW')} key='2'>
            <PendingInterviewGuideTable
              data={interviewData?.returnValue?.data}
              isFetching={isFetchingInterview}
              isLoading={isLoadingInterview}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageGuide:TAB_TITLE_REJECTED')} key='3'>
            <RejectGuideTable
              data={rejectedData?.returnValue?.data}
              isFetching={isFetchingRejected}
              isLoading={isLoadingRejected}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageGuide:TAB_TITLE_GUIDE_LIST')} key='4'>
            <GuideListTable data={listData?.returnValue?.data} isFetching={isFetchingList} isLoading={isLoadingList} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
