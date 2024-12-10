import { Button, ButtonProps, ConfigProvider, Flex, Grid, Pagination, Select, Space } from 'antd'
import { Dispatch, ReactNode, SetStateAction, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import AngleDoubleLeft from '@/components/icons/AngleDoubleLeft'
import AngleDoubleRight from '@/components/icons/AngleDoubleRight'
import { Meta } from '@/types/common'
import { ITEMS_PER_PAGE_OPTIONS } from '@/utils/constants'

type Props<T> = {
  pagination?: Meta
  setSearchParams: Dispatch<SetStateAction<T>>
}

export const TableFooter = <T,>({ pagination, setSearchParams }: Props<T>) => {
  const { t } = useTranslation()
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const isSmallDevice = useMemo(() => screens.xs, [screens])

  const handleChangePage = (page: number) => {
    setSearchParams((prev: T) => ({ ...prev, page }))
  }

  const handleChangeItemsPerPage = (value: number) => {
    setSearchParams((prev: T) => ({ ...prev, limit: value, page: 1 }))
  }

  const goToPage = (page: number) => {
    setSearchParams((prev) => ({ ...prev, page }))
  }

  useEffect(() => {
    if (pagination && pagination.totalPages !== 0 && pagination.currentPage > pagination.totalPages)
      setSearchParams((prev) => ({ ...prev, page: pagination.totalPages }))
  }, [pagination?.currentPage, pagination?.totalPages])

  if (pagination?.total === undefined || pagination?.total == null) {
    return null
  }

  return (
    <Flex justify='space-between' className='mt-5 sp:justify-center !text-black' wrap gap={16}>
      <Space className='sp:hidden'>
        {t('common:TABLE.TOTAL_ITEMS', { total: pagination?.total })}
        <Select
          virtual={false}
          size='large'
          className='w-34'
          value={pagination?.limit}
          onChange={handleChangeItemsPerPage}
          options={ITEMS_PER_PAGE_OPTIONS}
        />
      </Space>
      <Space>
        <PaginationButton
          icon={<AngleDoubleLeft />}
          disabled={pagination.currentPage === 1}
          onClick={() => handleChangePage(1)}
        />
        {isSmallDevice ? (
          <Pagination
            showSizeChanger={false}
            total={pagination.total}
            showLessItems
            pageSize={pagination.limit}
            current={pagination.currentPage}
            onChange={handleChangePage}
            itemRender={(page, type, element) =>
              renderPaginationItems({
                page,
                type,
                element,
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages,
                goToPage,
              })
            }
          />
        ) : (
          <Pagination
            showSizeChanger={false}
            total={pagination.total}
            pageSize={pagination.limit}
            current={pagination.currentPage}
            onChange={handleChangePage}
          />
        )}
        <PaginationButton
          icon={<AngleDoubleRight />}
          disabled={pagination.currentPage === pagination.totalPages}
          onClick={() => handleChangePage(pagination?.totalPages)}
        />
      </Space>
    </Flex>
  )
}

const PaginationButton = (props: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 0,
            defaultHoverBg: '#F0F0F0',
            defaultHoverBorderColor: '#C6D1DD',
            defaultHoverColor: '#233640',
            colorText: '#233640',
            colorBgContainerDisabled: '#FFFFFF',
            borderColorDisabled: '#C6D1DD',
            colorBorder: '#C6D1DD',
          },
        },
      }}
    >
      <Button {...props} />
    </ConfigProvider>
  )
}

const renderPaginationItems = ({
  page,
  type,
  element,
  currentPage,
  totalPages,
  goToPage,
}: {
  page: number
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'
  element: ReactNode
  currentPage: number
  totalPages: number
  goToPage: (page: number) => void
}) => {
  if (type === 'page') {
    if (totalPages === 5) {
      if (currentPage === 1 || currentPage === 2) {
        if ((page === 5 && currentPage === 1) || (page === 4 && currentPage === 2)) {
          return
        } else if (page === currentPage + 3) {
          return (
            <span onClick={() => goToPage(page)} className='ant-pagination-item-ellipsis !text-black-50 border-none'>
              •••
            </span>
          )
        }
      } else if (currentPage === 4 || currentPage === 5) {
        if ((page === 1 && currentPage === 5) || (page === 2 && currentPage === 4)) {
          return
        } else if (page === currentPage - 3) {
          return (
            <span onClick={() => goToPage(page)} className='ant-pagination-item-ellipsis !text-black-50 border-none'>
              •••
            </span>
          )
        }
      } else {
        if (page === 1) {
          return (
            <span onClick={() => goToPage(page)} className='ant-pagination-item-ellipsis !text-black-50 border-none'>
              •••
            </span>
          )
        } else if (page === 2) {
          return
        }
      }
      return element
    }
    if ((page === 2 && currentPage === 3) || (page === 1 && currentPage > 3)) {
      return
    }
    if (page === 1 && currentPage === 3) {
      return (
        <span onClick={() => goToPage(page)} className='ant-pagination-item-ellipsis !text-black-50 border-none'>
          •••
        </span>
      )
    }
  }
  return element
}
