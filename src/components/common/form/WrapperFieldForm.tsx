import { Form, FormItemProps, Skeleton, Space } from 'antd'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = FormItemProps & {
  children?: ReactNode
  error?: string
  className?: string
  isLoading?: boolean
}

export const WrapperFieldForm = ({
  children,
  isLoading = false,
  error = undefined,
  className = '',
  ...rest
}: Props) => {
  return (
    <Form.Item
      className={cn('sp:mb-6 mb-8 form-custom-field', className)}
      colon={false}
      tooltip={false}
      validateStatus={error ? 'error' : ''}
      help={error}
      {...rest}
    >
      <Space className={`${isLoading ? 'hidden' : 'block'}`}>{children}</Space>
      {isLoading && <Skeleton.Input active block />}
    </Form.Item>
  )
}
