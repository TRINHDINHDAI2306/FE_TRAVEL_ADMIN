import { Modal, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

import { PrimaryButton } from '@/components/common/button/PrimaryButton.tsx'
import { PrimaryButtonType } from '@/types/enum.ts'

type Props = {
  handleCancelDialog: () => void
  openDialog: boolean
  handleConfirmDelete: () => void
  isPending?: boolean
  message: string
}

export const DeleteConfirmModal = ({
  handleCancelDialog,
  openDialog,
  handleConfirmDelete,
  isPending,
  message,
}: Props) => {
  const { t } = useTranslation()
  return (
    <Modal
      title={t('common:MODAL.DELETE_TITLE')}
      onCancel={handleCancelDialog}
      open={openDialog}
      maskClosable={false}
      closable={!isPending}
      centered
      footer={[
        <PrimaryButton
          key='no-btn'
          buttonType={PrimaryButtonType.CancelState}
          disabled={isPending}
          onClick={handleCancelDialog}
        >
          {t('button:CANCEL')}
        </PrimaryButton>,
        <PrimaryButton
          key='ok-btn'
          buttonType={PrimaryButtonType.Danger}
          loading={isPending}
          onClick={handleConfirmDelete}
        >
          {t('button:DELETE')}
        </PrimaryButton>,
      ]}
    >
      <Typography.Paragraph className='text-black text-lg'>{message}</Typography.Paragraph>
    </Modal>
  )
}
