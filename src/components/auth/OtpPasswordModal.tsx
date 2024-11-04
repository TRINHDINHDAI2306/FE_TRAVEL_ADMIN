import { Input, message, Modal } from 'antd'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useVerifyOtpForgotPassword } from '@/api/auth/verifyOtp'
import { URL } from '@/utils/constants'

interface OtpModalProps {
  isModalOpen: boolean
  handleCancelOtp: () => void
  user_email: string
}

export const OtpModal: FC<OtpModalProps> = ({ isModalOpen, handleCancelOtp, user_email }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [otp_code, setOtpCode] = useState<string>('')
  const { mutate: verifyOtpMutate } = useVerifyOtpForgotPassword()

  const handleOkOtp = () => {
    if (!otp_code) {
      message.error(t('forgot-password:error.noOTP'))
      return
    }
    verifyOtpMutate(
      { user_email, otp_code },
      {
        onError: () => {
          message.error(t('OTPupdate:error'))
          navigate(URL.FORGOT_PASSWORD)
        },
        onSuccess: () => {
          message.success(t('OTPupdte:success'))
          handleCancelOtp()
        },
      },
    )
  }

  return (
    <Modal title={t('forgot-password:form.title')} open={isModalOpen} onOk={handleOkOtp} onCancel={handleCancelOtp}>
      <Input
        size='large'
        placeholder={t('forgot-password:form.placeholder')}
        value={otp_code}
        onChange={(e) => setOtpCode(e.target.value)}
      />
    </Modal>
  )
}
