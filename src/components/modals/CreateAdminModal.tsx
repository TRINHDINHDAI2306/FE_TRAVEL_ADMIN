import { zodResolver } from '@hookform/resolvers/zod'
import { Form, Input, Modal, Select, Typography } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useCreateAdmin } from '@/api/manageAdmins/useCreateAdmin'
import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import { CustomizeRequiredMark } from '@/components/common/form/CustomRequireMark'
import { WrapperFieldForm } from '@/components/common/form/WrapperFieldForm'
import { ADMIN_SCHEMA, AdminDTO } from '@/schemas/admin.schema'
import useAlertStore from '@/stores/alert.store'
import loadingSpinnerStore from '@/stores/loadingSpinner.store'
import { PrimaryButtonType } from '@/types/enum'
import { MAX_LENGTH } from '@/utils/constants'

type Props = {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateAdminModal = ({ isModal, setIsModal }: Props) => {
  const { t } = useTranslation()
  const setAlertConfig = useAlertStore.use.setAlertConfig()
  const setLoadingSpinner = loadingSpinnerStore.use.setLoadingSpinner()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AdminDTO>({
    resolver: zodResolver(ADMIN_SCHEMA),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const { mutate: mutateCreateAdmin, isPending } = useCreateAdmin({
    config: {
      onSuccess: () => {
        setAlertConfig({
          type: 'success',
          message: 'WEB_I_MSG_005',
          key: 'createAdminSuccess',
          field: t('field:GROUP'),
        })
        setIsModal(false)
        reset()
      },
      onSettled: () => setLoadingSpinner(false),
    },
  })

  const handleCancel = () => {
    setIsModal(false)
    reset()
  }

  const onFinish = (data: AdminDTO) => {
    setLoadingSpinner(true)
    mutateCreateAdmin(data)
  }

  return (
    <Modal
      title={<Typography.Title level={3}>{t('manageAdmin:MODAL_MANAGE_ADMIN.TITLE_ADD')}</Typography.Title>}
      open={isModal}
      onCancel={handleCancel}
      footer={[
        <PrimaryButton
          key='no-btn'
          buttonType={PrimaryButtonType.CancelState}
          disabled={isPending}
          onClick={handleCancel}
        >
          {t('button:BUTTON.CANCEL')}
        </PrimaryButton>,
        <PrimaryButton
          key='ok-btn'
          buttonType={PrimaryButtonType.Primary1}
          loading={isPending}
          onClick={handleSubmit(onFinish)}
        >
          {t('button:BUTTON.CREATE')}
        </PrimaryButton>,
      ]}
    >
      <Form
        layout='horizontal'
        className='w-full h-auto !pt-4'
        requiredMark={CustomizeRequiredMark}
        onFinish={handleSubmit(onFinish)}
      >
        <WrapperFieldForm
          label={t('manageAdmin:FIELD.USER_NAME')}
          error={errors?.username?.message}
          required
          htmlFor='username'
        >
          <Controller
            render={({ field }) => (
              <Input
                {...field}
                size='large'
                className='border-border !h-10'
                id='username'
                maxLength={MAX_LENGTH[255]}
                placeholder={t('manageAdmin:FIELD.USER_NAME')}
                onBlur={(e) => {
                  field.onChange(e.target.value.trim())
                  field.onBlur()
                }}
              />
            )}
            control={control}
            name='username'
          />
        </WrapperFieldForm>

        <WrapperFieldForm label={t('manageAdmin:FIELD.EMAIL')} error={errors?.email?.message} required htmlFor='email'>
          <Controller
            render={({ field }) => (
              <Input
                {...field}
                size='large'
                className='border-border !h-10'
                id='email'
                maxLength={MAX_LENGTH[255]}
                placeholder={t('manageAdmin:FIELD.EMAIL')}
                onBlur={(e) => {
                  field.onChange(e.target.value.trim())
                  field.onBlur()
                }}
              />
            )}
            control={control}
            name='email'
          />
        </WrapperFieldForm>

        <WrapperFieldForm label={t('manageAdmin:FIELD.ROLE')} error={errors?.role?.message} required htmlFor='role'>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                size='large'
                className='border-border !h-10'
                id='role'
                placeholder={t('manageAdmin:FIELD.ROLE')}
              >
                <Select.Option value='ADMIN'>{t('manageAdmin:MODAL_MANAGE_ADMIN.ADMIN')}</Select.Option>
                <Select.Option value='MOD'>{t('manageAdmin:MODAL_MANAGE_ADMIN.MOD')}</Select.Option>
              </Select>
            )}
            control={control}
            name='role'
          />
        </WrapperFieldForm>
      </Form>
    </Modal>
  )
}
