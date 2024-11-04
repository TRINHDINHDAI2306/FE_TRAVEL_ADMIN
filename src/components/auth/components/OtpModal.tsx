import { Input, message, Modal } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useVerifyOtpRegister } from '@/api/auth/verifyOtp'
import { I18nInstance as i18n } from '@/lib/i18n'
import { OTP_LENGTH, URL } from '@/utils/constants'

type OtpModalProps = {
  isOpenModal: boolean
  handleCancel: () => void
  user_email: string
}

export const OtpModal = ({ isOpenModal, handleCancel, user_email }: OtpModalProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [otp, setOtp] = useState<string>('')

  const { mutate, isPending } = useVerifyOtpRegister({
    onError: (error) => {
      message.error(error.response?.message)
    },
    onSuccess: () => {
      message.success(t('register:verifySuccess'))
      navigate(URL.LOGIN)
    },
    throwOnError: false,
  })

  const handleOk = () => {
    if (otp.length !== OTP_LENGTH) return message.error(t('register:requireOtp'))
    mutate({ user_email, otp_code: otp })
  }

  return (
    <Modal title={i18n.t('otp:title')} open={isOpenModal} onCancel={handleCancel} onOk={handleOk}>
      <Input.OTP onChange={(value) => setOtp(value)} disabled={isPending}>
        {otp}
      </Input.OTP>
    </Modal>
  )
}
