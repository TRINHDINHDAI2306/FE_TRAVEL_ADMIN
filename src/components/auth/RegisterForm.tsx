import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input, message } from 'antd'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useRegister } from '@/api/auth/register.ts'
import { OtpModal } from '@/components/auth/components/OtpModal'
import { FieldWrapper } from '@/components/common/form/FieldWrapper.tsx'
import { REGISTER_SCHEMA, RegisterDTO } from '@/schemas/auth.schema.ts'
import { REGISTER_FORM_VALUES_DEFAULT } from '@/utils/auth.ts'
import { transformNum } from '@/utils/common.ts'

export const RegisterForm: FC = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<RegisterDTO>({
    resolver: zodResolver(REGISTER_SCHEMA),
    defaultValues: REGISTER_FORM_VALUES_DEFAULT,
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const { mutate, isPending } = useRegister({
    onError: (error) => {
      message.error(error.response?.data?.message)
    },
    onSuccess: () => setIsOpenModal(true),
    throwOnError: false,
  })

  const onSubmit: SubmitHandler<RegisterDTO> = (value) => {
    if (isPending) return
    const { user_confirmPassword, ...other } = value
    mutate(other)
  }

  return (
    <>
      <Form layout='vertical' className='w-full' onFinish={handleSubmit(onSubmit)}>
        <FieldWrapper label={t('form:email')} required error={errors?.user_email?.message as string}>
          <Controller
            name='user_email'
            control={control}
            render={({ field }) => <Input {...field} size='large' placeholder={t('form:email')} />}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:name')} required error={errors?.user_name?.message as string}>
          <Controller
            name='user_name'
            control={control}
            render={({ field }) => <Input {...field} size='large' placeholder={t('form:name')} />}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:password')} required error={errors?.user_password?.message}>
          <Controller
            name='user_password'
            control={control}
            render={({ field }) => (
              <Input.Password {...field} size='large' autoComplete='new-password' placeholder={t('form:password')} />
            )}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:confirmPassword')} required error={errors?.user_confirmPassword?.message}>
          <Controller
            name='user_confirmPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                size='large'
                autoComplete='new-password'
                placeholder={t('form:confirmPassword')}
              />
            )}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:age')} required error={errors?.user_age?.message as string}>
          <Controller
            name='user_age'
            control={control}
            render={({ field }) => (
              <Input
                type='number'
                {...field}
                size='large'
                placeholder={t('form:age')}
                onChange={(e) => setValue('user_age', transformNum(e.target.value))}
              />
            )}
          />
        </FieldWrapper>
        <FieldWrapper label={t('form:address')} required error={errors?.user_address?.message as string}>
          <Controller
            name='user_address'
            control={control}
            render={({ field }) => <Input {...field} size='large' placeholder={t('form:address')} />}
          />
        </FieldWrapper>
        <Form.Item>
          <Button type='primary' block size='large' htmlType='submit' loading={isPending}>
            {t('button:register')}
          </Button>
        </Form.Item>
        <Form.Item className='text-center'>
          <Link to={'/login'} className='underline hover:underline'>
            {t('button:login')}
          </Link>
        </Form.Item>
      </Form>
      <OtpModal
        isOpenModal={isOpenModal}
        handleCancel={() => setIsOpenModal(false)}
        user_email={getValues('user_email')}
      />
    </>
  )
}
