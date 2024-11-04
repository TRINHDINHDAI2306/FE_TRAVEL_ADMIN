import {
  DownOutlined,
  HddOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Flex, Image, Layout, Menu, MenuProps, Space, theme, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import stringify from 'query-string'
import { FC, useLayoutEffect, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, Navigate, Outlet, useLocation, useMatches } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { I18nInstance as i18n } from '@/lib/i18n'
import useAuthStore from '@/stores/auth.store.ts'
import { URL } from '@/utils/constants'

type MenuConfig = {
  id: number
  title: string
  icon: FC<any>
  href: string
  role: 'SUPER_ADMIN' | 'HR_USER' | 'ADMIN_COMPANY' | string[]
}
const menuConfigDefault: MenuConfig[] = [
  {
    id: 1,
    title: i18n.t('permission:title'),
    icon: HddOutlined,
    href: URL.PERMISSION,
    role: 'SUPER_ADMIN',
  },
  {
    id: 2,
    title: i18n.t('role:title'),
    icon: TeamOutlined,
    href: URL.ROLE,
    role: 'SUPER_ADMIN',
  },
  {
    id: 3,
    title: i18n.t('job:title'),
    icon: SolutionOutlined,
    href: URL.JOB,
    role: ['HR_USER', 'ADMIN_COMPANY'],
  },
  {
    id: 4,
    title: i18n.t('company:title'),
    icon: ReconciliationOutlined,
    href: URL.COMPANY,
    role: 'SUPER_ADMIN',
  },
  {
    id: 5,
    title: i18n.t('users:title'),
    icon: UserOutlined,
    href: URL.USERS,
    role: 'ADMIN_COMPANY',
  },
  {
    id: 6,
    title: i18n.t('resumes:title'),
    icon: ProfileOutlined,
    href: URL.RESUMES,
    role: ['HR_USER', 'ADMIN_COMPANY'],
  },
]

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [createLink, setCreateLink] = useState<string>('')
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const matches = useMatches()
  const auth = useAuthStore.use.auth()
  const setAuth = useAuthStore.use.setAuth()

  const location = useLocation()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={URL.ADMIN_UPDATE_PROFILE}>{i18n.t('updateProfile:title')}</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: i18n.t('button:logout'),
      icon: <UserOutlined />,
      onClick: () => {
        setAuth(undefined)
        localStorage.clear()
        window.location.href = URL.LOGIN
      },
    },
  ]

  const isUpsert = useMemo(
    () =>
      location.pathname.includes('create') ||
      location?.pathname.includes('edit') ||
      location?.pathname.includes('update'),
    [location.pathname],
  )

  const isResumes = useMemo(() => location.pathname.includes('resumes'), [location.pathname])

  useLayoutEffect(() => {
    if (!window.navigator.onLine) {
      throw Error('off line')
    }
  }, [])

  if (!auth) return <Navigate to={URL.LOGIN} replace />

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: stringify.parse,
          objectToSearchString: stringify.stringify,
        }}
      >
        <Layout className='min-h-screen'>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className='left-0 top-0 bottom-0 min-h-screen sticky'
            theme='dark'
          >
            <Menu
              mode='inline'
              theme='dark'
              selectedKeys={[matches[1]['pathname']]}
              className='left-0 top-0 bottom-0 min-h-screen sticky'
            >
              {menuConfigDefault.map((item) => {
                if ((Array.isArray(item.role) && item.role.includes(auth.role_name)) || auth.role_name === item.role)
                  return (
                    <Menu.Item key={item.href}>
                      <Link to={item.href}>
                        <item.icon style={{ fontSize: '20px' }} />
                        <span>{item.title}</span>
                      </Link>
                    </Menu.Item>
                  )
              })}
            </Menu>
          </Sider>
          <Layout className='flex-grow'>
            <Header
              style={{
                background: colorBgContainer,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 2px 0px',
              }}
              className={`top-0 z-10 w-full flex items-center justify-between sticky !px-4 h-[64px]`}
            >
              <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className='!text-base !w-10 !h-10 !rounded'
              />
              {auth && (
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
              )}
            </Header>
            <Content className='m-4 min-h-[300px]'>
              <Flex justify={isUpsert ? 'flex-start' : 'space-between'} align='center'>
                {!isResumes && (
                  <>
                    <Typography.Title level={2}>{title}</Typography.Title>
                    {!isUpsert && (
                      <Button type='primary' size='large'>
                        <Link to={createLink}>{i18n.t('button:create')}</Link>
                      </Button>
                    )}
                  </>
                )}
              </Flex>
              <Outlet context={{ setTitle, setCreateLink }} />
            </Content>
          </Layout>
        </Layout>
      </QueryParamProvider>
    </ErrorBoundary>
  )
}
