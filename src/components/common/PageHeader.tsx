import { Flex, Space } from 'antd'
import Title from 'antd/es/typography/Title'

import { BackButton } from '@/components/common/button/BackButton'

type Props = {
  title: string
  isBack?: boolean
  isChange?: boolean
  backTo?: string
  children?: React.ReactNode
}

export const PageHeader = ({ title, isBack = false, isChange = false, backTo, children }: Props) => {
  return (
    <Flex wrap className='mb-4 items-center'>
      {isBack && (
        <Space className='w-full sp:w-auto'>
          <BackButton isChange={isChange} to={backTo as string} />
        </Space>
      )}
      <Title level={2} className={`${isBack ? 'sp:ml-2' : 'sp:!mb-0'} sp:!text-xl !text-black`}>
        {title}
      </Title>
      <Space className={`${isBack ? 'sp:w-full' : ''} justify-end grow items-start`}>{children}</Space>
    </Flex>
  )
}
