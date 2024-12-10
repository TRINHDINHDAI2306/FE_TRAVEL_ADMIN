/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Button, Table, TableProps } from 'antd'
import { useTranslation } from 'react-i18next'

import { ColumnEllipsis } from '@/components/common/table/ColumnEllipsis'
import { SkeletonRowTable } from '@/components/common/table/SkeletonRowTable'
import { I18nInstance as i18n } from '@/lib/i18n'
import { ApprovalRequestBlog } from '@/types/manageBlog.type'
import { generateDefaultData, isDataLoadPage } from '@/utils/common'
import { handleActivePost } from '@/api/manageBlogs/useGetBlogs'

type Props = {
  data?: ApprovalRequestBlog[]
  isLoading: boolean
  isFetching: boolean
  refetch: () => void
}

export const ApprovalRequestBlogTable = ({ data, isLoading, isFetching, refetch }: Props) => {
  const { t } = useTranslation()

  const columns: TableProps<ApprovalRequestBlog>['columns'] = [
    {
      title: i18n.t('manageBlog:FIELD.NO'),
      dataIndex: 'STT',
      key: 'id',
      width: '40px',
      render(_, record, index) {
        return isDataLoadPage(index) ? <SkeletonRowTable /> : <ColumnEllipsis value={index + 1} />
      },
    },
    {
      title: i18n.t('manageBlog:FIELD.CREATE_DATE'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      render(createdAt) {
        return isDataLoadPage(createdAt) ? <SkeletonRowTable /> : <ColumnEllipsis value={createdAt} />
      },
    },
    {
      title: i18n.t('manageBlog:FIELD.TITLE'),
      dataIndex: 'title',
      key: 'title',
      render(title) {
        return isDataLoadPage(title) ? <SkeletonRowTable /> : <ColumnEllipsis value={title} />
      },
    },
    {
      title: i18n.t('manageBlog:FIELD.AUTHOR'),
      dataIndex: ['user', 'username'],
      key: 'user',
      render(user) {
        return isDataLoadPage(user) ? <SkeletonRowTable /> : <ColumnEllipsis value={user} />
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
          <Button type='primary' onClick={() => functionActivePost(record)}>
            Phê duyệt
          </Button>
        )
      },
    },
  ]

  async function functionActivePost(item: ApprovalRequestBlog) {
    const data = await handleActivePost({
      postId: item.id,
      status: 'ACTIVE',
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
      dataSource={isLoading ? generateDefaultData<ApprovalRequestBlog>(['id', 'time', 'title', 'user']) : data}
      bordered
      loading={{
        spinning: isLoading ? false : isFetching,
      }}
    />
  )
}
