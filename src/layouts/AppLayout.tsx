import {
  BankOutlined,
  CloudServerOutlined,
  ContainerOutlined,
  DownOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ReconciliationOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  TagOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Flex, Image, Layout, Menu, MenuProps, Space, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import stringify from 'query-string'
import { FC, useLayoutEffect, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation, useMatches } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import logo from '@/assets/logo.png'
import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { I18nInstance as i18n } from '@/lib/i18n'
import useAuthStore from '@/stores/auth.store.ts'
import { URL } from '@/utils/constants'

type MenuConfig = {
  id: number
  title: string
  icon: FC<any>
  href: string
}

const menuConfigDefault: MenuConfig[] = [
  {
    id: 1,
    title: i18n.t('manageAdmin:TITLE_PAGE'),
    icon: TeamOutlined,
    href: URL.MANAGE_ADMIN,
  },
  {
    id: 2,
    title: i18n.t('manageUser:TITLE_PAGE'),
    icon: SolutionOutlined,
    href: URL.MANAGE_USER,
  },
  {
    id: 3,
    title: i18n.t('manageGuide:TITLE_PAGE'),
    icon: UserOutlined,
    href: URL.MANAGE_GUIDE,
  },
  {
    id: 4,
    title: i18n.t('manageTour:TITLE_PAGE'),
    icon: ReconciliationOutlined,
    href: URL.MANAGE_TOUR,
  },
  {
    id: 5,
    title: i18n.t('managePost:TITLE_PAGE'),
    icon: ContainerOutlined,
    href: URL.MANAGE_BLOG,
  },
  {
    id: 6,
    title: i18n.t('reportPost:TITLE_PAGE'),
    icon: FormOutlined,
    href: URL.MANAGE_VOUCHER,
  },
  {
    id: 7,
    title: i18n.t('reportGuide:TITLE_PAGE'),
    icon: SnippetsOutlined,
    href: URL.REPORT_GUIDE,
  },
  {
    id: 8,
    title: i18n.t('manageVoucher:TITLE_PAGE'),
    icon: TagOutlined,
    href: URL.MANAGE_VOUCHER,
  },
  {
    id: 9,
    title: i18n.t('manageWithdrawals:TITLE_PAGE'),
    icon: BankOutlined,
    href: URL.MANAGE_WITHDRAWAL,
  },
  {
    id: 10,
    title: i18n.t('statistics:TITLE_PAGE'),
    icon: PieChartOutlined,
    href: URL.MANAGE_WITHDRAWAL,
  },
  {
    id: 11,
    title: i18n.t('systems:TITLE_PAGE'),
    icon: CloudServerOutlined,
    href: URL.MANAGE_WITHDRAWAL,
  },
]

export const AdminLayout = () => {
  const { t } = useTranslation()
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
      key: '2',
      label: i18n.t('button:BUTTON.LOGOUT'),
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
      location.pathname.includes('edit') ||
      location.pathname.includes('update'),
    [location.pathname],
  )

  const isResumes = useMemo(() => location.pathname.includes('resumes'), [location.pathname])

  useLayoutEffect(() => {
    if (!window.navigator.onLine) {
      throw Error('offline')
    }
  }, [])

  // if (!auth) return <Navigate to={URL.LOGIN} replace />

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
              selectedKeys={[location.pathname]}
              className='left-0 top-0 bottom-0 min-h-screen sticky font-bold'
            >
              <Flex justify='center'>
                <Link to='/'>
                  <img src={logo} alt='logo' className='w-20 h-20' />
                </Link>
              </Flex>
              {menuConfigDefault.map((item) => (
                <Menu.Item key={item.href} className='!h-12'>
                  <Link to={item.href}>
                    <item.icon style={{ fontSize: '20px' }} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout className='flex-grow'>
            <Header
              style={{
                background: colorBgContainer,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 2px 0px',
              }}
              className='top-0 z-10 w-full flex items-center justify-between sticky !px-4 h-[64px]'
            >
              <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className='!text-base !w-10 !h-10 !rounded'
              />
              {auth && (
                <Space className='mr-5' align='center'>
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
                </Space>
              )}
            </Header>
            <Content className='m-4 min-h-[300px]'>
              <Outlet context={{ setTitle, setCreateLink }} />
            </Content>
          </Layout>
        </Layout>
      </QueryParamProvider>
    </ErrorBoundary>
  )
}
