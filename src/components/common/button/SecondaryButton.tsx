import { Button, ButtonProps } from 'antd'

import { cn } from '@/lib/utils'
import { SecondaryButtonType } from '@/types/enum'

type Props = {
  buttonType: SecondaryButtonType
  className?: string
} & ButtonProps

const buttonTypesClasses = {
  [SecondaryButtonType.Delete]: 'text-red bg-red-10 border-red hover:!bg-red hover:!text-white hover:!border-red',
  [SecondaryButtonType.Detail]:
    'text-primary-black bg-primary-black-10 border-primary-black hover:!bg-primary-black hover:!text-white hover:!border-primary-black',
  [SecondaryButtonType.Edit]:
    'text-primary-light-blue bg-primary-light-blue-10 border-primary-light-blue hover:!bg-primary-light-blue hover:!text-white hover:!border-primary-light-blue',
  [SecondaryButtonType.New]:
    'text-primary-dark-blue bg-primary-dark-blue-10 border-primary-dark-blue hover:!bg-primary-dark-blue hover:!text-white hover:!border-primary-dark-blue',
  [SecondaryButtonType.Stop]:
    'text-yellow bg-yellow-10 border-yellow hover:!bg-yellow hover:!text-white hover:!border-yellow',
}

export const SecondaryButton = ({ buttonType = SecondaryButtonType.New, children, className, ...props }: Props) => {
  const buttonClassNames = props.disabled ? '' : buttonTypesClasses[buttonType]

  return (
    <Button size='middle' className={cn('text-sm', buttonClassNames, className)} autoInsertSpace={false} {...props}>
      {children}
    </Button>
  )
}
