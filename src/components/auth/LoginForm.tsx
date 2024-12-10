/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Col, Form, Image, Input, Typography, message } from 'antd'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

import { useLogin } from '@/api/auth/login.ts'
import { useGetMe } from '@/api/user/me'
import { FieldWrapper } from '@/components/common/form/FieldWrapper.tsx'
import { I18nInstance as i18n } from '@/lib/i18n'
import { LOGIN_SCHEMA, LoginDTO } from '@/schemas/auth.schema.ts'
import authStore from '@/stores/auth.store'
import { LOGIN_FORM_VALUES_DEFAULT } from '@/utils/auth.ts'
import { API_STATUS } from '@/utils/constants'
import { localStorageServices } from '@/utils/localStorageServices.ts'

export const LoginForm: FC = () => {
  const navigate = useNavigate()
  const setAuth = authStore.use.setAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    onError: (error: any) => {
      if (error.response?.status === API_STATUS.BAD_REQUEST) {
        message.error(error.response?.data?.info?.message)
      }
      setIsLoading(false)
    },
    onSuccess: (data) => {
      if (data?.returnValue) {
        localStorageServices.setAccessToken(data?.returnValue?.accessToken)
        localStorageServices.setRefreshToken(data?.returnValue?.refreshToken)
        localStorageServices.setDeviceId(localStorageServices.getDeviceId() ?? 'helodeviceid')
        message.success(i18n.t('message:SUCCESS.WEB_S_MSG_002'))
      }
    },
    throwOnError: false,
  })

  const { data, isPending: isPendingGetMe } = useGetMe({
    enabled: isSuccess,
    throwOnError: false,
  })

  useEffect(() => {
    if (data?.returnValue) {
      setAuth(data.returnValue as any)
      navigate('/')
    }
  }, [data])

  const onSubmit: SubmitHandler<LoginDTO> = (value) => {
    if (isPendingLogin || isPendingGetMe) return
    mutate({
      ...value,
      device_id: localStorageServices.getDeviceId() ?? 'helodeviceid',
      ip: '12.17.67.22',
      email: value.user_email,
      password: value.user_password,
    })
  }

  return (
    <Col className='flex flex-col items-center justify-center'>
      <Image alt='' width={100} height={100} src={logo} />
      <Typography className='text-3xl text-gray-500 font-semibold mt-[-20px]'> TravelVN</Typography>

      <Col className='bg-white shadow-xl w-96 p-5 rounded-xl flex flex-col items-center justify-center mt-2 border border-gray-100'>
        <Typography className='text-2xl text-black font-bold'>Đăng nhập</Typography>
        <Form layout='vertical' className='w-full' onFinish={handleSubmit(onSubmit)}>
          <FieldWrapper label={i18n.t('login:FIELD.EMAIL')} required error={errors?.user_email?.message as string}>
            <Controller
              name='user_email'
              control={control}
              render={({ field }) => <Input {...field} size='large' placeholder={i18n.t('login:FIELD.EMAIL')} />}
            />
          </FieldWrapper>
          <FieldWrapper label={i18n.t('login:FIELD.PASSWORD')} required error={errors?.user_password?.message}>
            <Controller
              name='user_password'
              control={control}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  size='large'
                  autoComplete='current-password'
                  placeholder={i18n.t('login:FIELD.PASSWORD')}
                />
              )}
            />
          </FieldWrapper>
          <Form.Item>
            <Button
              type='primary'
              block
              size='large'
              htmlType='submit'
              loading={isPendingLogin || isPendingGetMe || isLoading}
            >
              {i18n.t('login:BUTTON.LOGIN')}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Col>
  )
}
