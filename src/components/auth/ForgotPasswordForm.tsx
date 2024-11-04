import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input, message } from 'antd'
import { FC, useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { useForgotPassword } from '@/api/auth/forgotPassword.ts'
import { OtpModal } from '@/components/auth/OtpPasswordModal'
import { FieldWrapper } from '@/components/common/form/FieldWrapper.tsx'
import { FORGOT_PASSWORD_SCHEMA, ForgotPasswordDTO } from '@/schemas/auth.schema'

export const ForgotPasswordForm: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordDTO>({
    resolver: zodResolver(FORGOT_PASSWORD_SCHEMA),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const { mutate: forgotPasswordMutate } = useForgotPassword({
    config: {
      onError: () => {
        setIsLoading(false)
        message.error(t('forgot-password:error.request'))
        navigate('/forgot-password')
      },
      onSuccess: () => {
        setIsLoading(false)
        message.success(t('forgot-password:success.request'))
        setIsModalOpen(true)
      },
      throwOnError: true,
    },
  })

  const onSubmit = useCallback(
    (data: ForgotPasswordDTO) => {
      if (isLoading) {
        return
      }
      setUserEmail(data.user_email)
      setIsLoading(true)
      forgotPasswordMutate(data)
    },
    [isLoading, forgotPasswordMutate],
  )

  const handleCancelFormOTP = () => {
    setIsModalOpen(false)
  }

  return (
    <Form layout='vertical' className='w-full' onFinish={handleSubmit(onSubmit)}>
      <FieldWrapper label={t('form:fields.email')} error={errors?.user_email?.message as string}>
        <Controller
          render={({ field }) => <Input {...field} size='large' placeholder={t('form:fields.email')} />}
          control={control}
          name='user_email'
        />
      </FieldWrapper>
      <Form.Item>
        <Button type='primary' block size='large' className='mt-4' htmlType='submit' loading={isLoading}>
          {t('button:forgot-password')}
        </Button>
        <OtpModal isModalOpen={isModalOpen} handleCancelOtp={handleCancelFormOTP} user_email={userEmail} />
      </Form.Item>
      <Form.Item className='text-center'>
        <Link to='/login' className='underline hover:underline'>
          {t('auth:login.title')}
        </Link>
      </Form.Item>
    </Form>
  )
}
