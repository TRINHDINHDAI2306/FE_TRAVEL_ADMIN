import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input, message } from 'antd'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useLogin } from '@/api/auth/login.ts'
import { useGetMe } from '@/api/user/me'
import { FieldWrapper } from '@/components/common/form/FieldWrapper.tsx'
import { LOGIN_SCHEMA, LoginDTO } from '@/schemas/auth.schema.ts'
import authStore from '@/stores/auth.store'
import { LOGIN_FORM_VALUES_DEFAULT } from '@/utils/auth.ts'
import { URL } from '@/utils/constants'
import { localStorageServices } from '@/utils/localStorageServices.ts'

export const LoginForm: FC = () => {
  const { t } = useTranslation()
  const setAuth = authStore.use.setAuth()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(LOGIN_SCHEMA),
    defaultValues: LOGIN_FORM_VALUES_DEFAULT,
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const {
    mutate,
    isPending: isPendingLogin,
    isSuccess,
  } = useLogin({
    onError: (error) => {
      message.error(error.response?.data?.message)
    },
    onSuccess: (data) => {
      localStorageServices.setAccessToken(data?.metaData?.access_token || '')
      localStorageServices.setRefreshToken(data?.metaData?.refresh_token)
      localStorageServices.setDeviceId(data?.metaData?.device_id)
    },
    throwOnError: false,
  })

  const { data, isPending: isPendingGetMe } = useGetMe({
    enabled: isSuccess,
    throwOnError: false,
  })

  useEffect(() => {
    if (data?.metaData) setAuth(data.metaData)
  }, [data])

  const onSubmit: SubmitHandler<LoginDTO> = (value) => {
    if (isPendingLogin || isPendingGetMe) return
    mutate({ ...value, device_id: localStorageServices.getDeviceId() ?? 'helodeviceid', ip: '12.17.67.22' })
  }

  return (
    <>
      <Form layout='vertical' className='w-full' onFinish={handleSubmit(onSubmit)}>
        <FieldWrapper label={t('form:fields.email')} required error={errors?.user_email?.message as string}>
          <Controller
            name='user_email'
            control={control}
            render={({ field }) => <Input {...field} size='large' placeholder={t('form:fields.email')} />}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:fields.password')} required error={errors?.user_password?.message}>
          <Controller
            name='user_password'
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                size='large'
                autoComplete='current-password'
                placeholder={t('form:fields.password')}
              />
            )}
          />
        </FieldWrapper>
        <Form.Item>
          <Button
            type='primary'
            block
            size='large'
            className='mt-4'
            htmlType='submit'
            loading={isPendingLogin || isPendingGetMe}
          >
            {t('button:login')}
          </Button>
        </Form.Item>
        <Form.Item className='text-center'>
          <Link to={URL.REGISTER} className='underline hover:underline mr-4'>
            {t('button:register')}
          </Link>
          <Link to={URL.FORGOT_PASSWORD} className='underline hover:underline'>
            {t('button:forgot-password')}
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
