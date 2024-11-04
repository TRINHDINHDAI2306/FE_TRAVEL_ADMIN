import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input, Space, message } from 'antd'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { useUpdatePassword } from '@/api/auth/updatePassword.ts'
import { FieldWrapper } from '@/components/common/form/FieldWrapper.tsx'
import { UPDATE_PASSWORD_SCHEMA, UpdatePasswordDTO } from '@/schemas/auth.schema.ts'
import { URL } from '@/utils/constants'
import { verifySignature, verifyTimestamp } from '@/utils/verifysign'
// import { verifySignature, verifyTimestamp } from '@/utils/verifysign'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const UpdatePasswordForm: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const query = useQuery()

  const { user_email, nonce, timestamp, sign } = useMemo(() => {
    const emailParam = query.get('email') || ''
    const nonceParam = query.get('nonce') || ''
    const timestampParam = query.get('timestamp') || '0'
    const signParam = query.get('sign') || ''

    return {
      user_email: emailParam,
      nonce: nonceParam,
      timestamp: timestampParam,
      sign: signParam,
    }
  }, [query])

  useEffect(() => {
    const isVerified = verifySignature(user_email, nonce, timestamp, sign, 'sha_256_hash_key')
    if (!isVerified) {
      message.error('Invalid signature.')
      navigate('forgot-password')
      return
    }
    const isNotExpired = verifyTimestamp(timestamp, 60 * 60 * 24)
    if (!isNotExpired) {
      message.error('Link has expired.')
      navigate('forgot-password')
      return
    }
  }, [user_email, nonce, timestamp, sign, navigate])

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdatePasswordDTO>({
    resolver: zodResolver(UPDATE_PASSWORD_SCHEMA),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const { mutate: updatePasswordMutate } = useUpdatePassword({
    config: {
      onError: () => {
        setIsLoading(false)
        message.error(t('update-password:error'))
      },
      onSuccess: () => {
        message.success(t('update-password:success'))
        navigate(URL.LOGIN)
      },
      throwOnError: true,
    },
  })

  const onSubmit = useCallback(
    (data: UpdatePasswordDTO) => {
      if (isLoading) {
        return
      }

      const combinedData = {
        ...data,
        user_email,
        nonce,
        timestamp,
        sign,
      }
      setIsLoading(true)
      updatePasswordMutate(combinedData)
    },
    [isLoading, user_email, nonce, timestamp, sign, updatePasswordMutate],
  )

  return (
    <Form layout='vertical' className='w-full' onFinish={handleSubmit(onSubmit)}>
      <Space className='font-bold mb-5'>
        {t('form:fields.email')}: {user_email}
      </Space>
      <FieldWrapper label={t('form:fields.newPassword')} error={errors?.new_password?.message as string}>
        <Controller
          render={({ field }) => (
            <Input.Password
              {...field}
              size='large'
              autoComplete='current-password'
              placeholder={t('form:fields.newPassword')}
            />
          )}
          control={control}
          name='new_password'
        />
      </FieldWrapper>
      <FieldWrapper label={t('form:fields.confirmPassword')} error={errors?.confirm_newpassword?.message}>
        <Controller
          render={({ field }) => (
            <Input.Password
              {...field}
              size='large'
              autoComplete='new-password'
              placeholder={t('form:fields.confirmPassword')}
            />
          )}
          control={control}
          name='confirm_newpassword'
        />
      </FieldWrapper>
      <Form.Item>
        <Button type='primary' block size='large' className='mt-4' htmlType='submit' loading={isLoading}>
          {t('button:update-password')}
        </Button>
      </Form.Item>
    </Form>
  )
}
