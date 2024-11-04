import { Divider, Layout, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

const { Title } = Typography
type Props = {
  children: ReactNode
  title: string
  customClass?: string
}

export const AuthLayout = ({ title, customClass, children }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout className='h-[100dvh] items-center justify-center'>
        <Content className={`flex p-6 flex-col w-full justify-center box-border md:w-[424px] ${customClass}`}>
          <Title level={2} className='!text-[2rem] !mb-3 text-center'>
            {title}
          </Title>
          <Divider className='!mt-0 !mb-4' />
          {children}
        </Content>
      </Layout>
    </>
  )
}
