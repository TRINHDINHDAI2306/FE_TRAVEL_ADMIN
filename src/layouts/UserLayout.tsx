import { DownOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Flex, Image, Layout, Row, Space, Typography } from 'antd'
import stringify from 'query-string'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { I18nInstance as i18n } from '@/lib/i18n'
import useAuthStore from '@/stores/auth.store.ts'
import { URL } from '@/utils/constants'

export const UserLayout: FC = () => {
  const { t } = useTranslation()
  const auth = useAuthStore.use.auth()
  const setAuth = useAuthStore.use.setAuth()
  const [title, setTitle] = useState<string>('')

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={URL.JOB_LISTING}>{i18n.t('jobListings:title')}</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: <Link to={URL.USER_UPDATE_PROFILE}>{i18n.t('updateProfile:title')}</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '3',
      label: <Link to={URL.APPLIED_JOBS}>{i18n.t('appliedJobs:title')}</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '4',
      label: i18n.t('button:logout'),
      icon: <UserOutlined />,
      onClick: () => {
        setAuth(undefined)
        localStorage.clear()
        window.location.href = URL.LOGIN
      },
    },
  ]

  useEffect(() => {
    document.title = title ? title : 'My Application'
  }, [title])

  return (
    <Layout>
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: stringify.parse,
          objectToSearchString: stringify.stringify,
        }}
      >
        <Layout.Header>
          <Flex justify={title ? 'space-between' : 'flex-end'} align='center' className='w-full h-full'>
            <Row>
              {title && (
                <Typography.Title level={2} className='!text-white !mb-0'>
                  {title}
                </Typography.Title>
              )}
            </Row>
            {auth ? (
              <Flex justify='center' align='center' gap={20} className='mr-5'>
                <Image
                  src={auth.user_avatar_url}
                  height={40}
                  width={40}
                  className='flex'
                  preview={false}
                  style={{ borderRadius: '50%' }}
                />
                <Dropdown placement='bottom' trigger={['click']} menu={{ items }}>
                  <Button>
                    <Space>
                      {auth.user_name}
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Flex>
            ) : (
              <Button type='primary'>
                <Link to={URL.LOGIN}>{t('auth:login.title')}</Link>
              </Button>
            )}
          </Flex>
        </Layout.Header>
        <Layout.Content>
          <Outlet context={{ setTitle }} />
        </Layout.Content>
      </QueryParamProvider>
    </Layout>
  )
}
