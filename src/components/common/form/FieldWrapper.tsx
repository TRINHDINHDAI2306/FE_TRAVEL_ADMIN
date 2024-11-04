import { Form, FormItemProps } from 'antd'
import { ReactNode } from 'react'

type Props = FormItemProps & {
  children?: ReactNode
  error?: string
  readonly?: boolean
  valueText?: string
  className?: string
}

export const FieldWrapper = ({
  children,
  error = undefined,
  readonly = false,
  valueText = '',
  className = '',
  ...rest
}: Props) => {
  return (
    <Form.Item
      className={`font-bold relative ${readonly ? 'input-read-only' : ''} ${className}`}
      tooltip={false}
      {...rest}
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      {children}
    </Form.Item>
  )
}
