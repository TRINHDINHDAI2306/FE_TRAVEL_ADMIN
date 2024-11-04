import { Alert, message } from 'antd'

type TShowMessage = {
  type: 'success' | 'warning' | 'error'
  _message: string
}

export const showMessage = ({ type, _message }: TShowMessage) =>
  message.open({ content: <Alert type={type} message={type} description={_message} showIcon closable banner /> })
