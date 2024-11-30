/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { Card, Tabs } from 'antd'

import { PageHeader } from '@/components/common/PageHeader'

import { useGetManageBlogs } from '@/api/manageBlogs/useGetBlogs'
import { ApprovalRequestBlogTable } from '@/components/manage-blog/ApprovalRequestBlogTable'
import { HistoryApprovalBlogsTable } from '@/components/manage-blog/HistoryApprovalBlogTable'
import { ReApprovalRequestBlogTable } from '@/components/manage-blog/ReApprovalRequestBlogTable'
import { RejectBlogTable } from '@/components/manage-blog/RejectRequestBlogTable'
import { PageLayout } from '@/layouts/PageLayout'
import { StatusBlog } from '@/types/enum'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ManageBlog = () => {
  const { t } = useTranslation()

  // const [tabKey, setTabKey] = useState('1')

  // const {
  //   data: approvalData,
  //   isLoading: isLoadingApproval,
  //   isFetching: isFetchingApproval,
  // } = useGetManageBlogs({
  //   params: { status: StatusBlog.PENDING, type: 'ApprovalRequestBlog' },
  // })

  // const {
  //   data: reApprovalData,
  //   isLoading: isLoadingReApproval,
  //   isFetching: isFetchingReApproval,
  // } = useGetManageBlogs({
  //   params: { status: StatusBlog.WAITING, type:'ReApprovalRequestBlog' },
  // })

  // const {
  //   data: rejectedData,
  //   isLoading: isLoadingRejected,
  //   isFetching: isFetchingRejected,
  // } = useGetManageBlogs({
  //   params: { status: StatusBlog.REJECTED, type: 'RejectedBlog' },
  // })

  // const {
  //   data: listData,
  //   isLoading: isLoadingList,
  //   isFetching: isFetchingList,
  // } = useGetManageBlogs({
  //   params: { status: StatusBlog.ACTIVE, type: 'HistoryBlog' },
  // })

  const [tabKey, setTabKey] = useState('1')

  // Mapping the tabKey to params
  const getParamsByTabKey = (key: string) => {
    switch (key) {
      case '1':
        return { status: StatusBlog.PENDING, type: 'ApprovalRequestBlog' }
      case '4':
        return { status: StatusBlog.WAITING, type: 'ReApprovalRequestBlog' }
      case '3':
        return { status: StatusBlog.REJECTED, type: 'RejectedBlog' }
      case '2':
        return { status: StatusBlog.ACTIVE, type: 'HistoryBlog' }
      default:
        return { status: '', type: '' } // Default params
    }
  }

  // Fetching data based on the tabKey
  const { isLoading, isFetching, data } = useGetManageBlogs({
    params: getParamsByTabKey(tabKey),
  })

  return (
    <PageLayout title={t('manageBlog:TITLE_PAGE')}>
      <PageHeader title={t('manageBlog:TITLE_PAGE')} />
      <Card>
        <Tabs
          onChange={(e: string) => {
            setTabKey(e)
          }}
          defaultActiveKey='1'
        >
          <Tabs.TabPane tab={t('manageBlog:TAB_TITLE_APPROVAL_REQUEST')} key='1'>
            <ApprovalRequestBlogTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isLoading} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageBlog:TAB_TITLE_HISTORY_APPROVAL')} key='2'>
            <HistoryApprovalBlogsTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isFetching} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageBlog:TAB_TITLE_REJECT')} key='3'>
            <RejectBlogTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isLoading} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t('manageBlog:TAB_TITLE_REQUEST_REAPPROVAL')} key='4'>
            <ReApprovalRequestBlogTable isFetching={isFetching} data={data?.returnValue?.data} isLoading={isLoading} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageLayout>
  )
}
