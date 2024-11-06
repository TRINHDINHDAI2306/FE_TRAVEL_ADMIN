import { ButtonProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import ArrowLeft from '@/components/icons/ArrowLeft'
import useCancelModalStore from '@/stores/cancelModal.store.ts'
import { PrimaryButtonType } from '@/types/enum'

type Props = ButtonProps & {
  to: string
  isChange?: boolean
  className?: string
}

export const BackButton = ({ to, isChange = false, className, ...props }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const setIsOpen = useCancelModalStore.use.setIsOpen()
  const setLinkTo = useCancelModalStore.use.setLinkTo()

  const onClickBackButton = () => {
    if (!isChange) {
      return navigate(to)
    }
    setIsOpen(true)
    setLinkTo(to)
  }

  return (
    <PrimaryButton
      size='middle'
      icon={<ArrowLeft />}
      onClick={onClickBackButton}
      buttonType={PrimaryButtonType.Upload}
      className={`py-2 px-2 mb-4 ${className}`}
      {...props}
    >
      {t('button:BACK')}
    </PrimaryButton>
  )
}
