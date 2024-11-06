import { Button, ButtonProps } from 'antd'

import { cn } from '@/lib/utils'
import { PrimaryButtonType } from '@/types/enum'

type Props = {
  buttonType: PrimaryButtonType
  className?: string
} & ButtonProps

const buttonTypesClasses = {
  [PrimaryButtonType.Primary1]: 'bg-primary-dark-blue hover:!bg-primary-dark-blue-hover disabled:bg-primary-dark-blue',
  [PrimaryButtonType.Primary2]:
    'bg-primary-light-blue hover:!bg-primary-light-blue-hover disabled:bg-primary-light-blue',
  [PrimaryButtonType.Secondary]: 'bg-primary-black hover:!bg-primary-black-hover disabled:bg-primary-black',
  [PrimaryButtonType.CancelState]: 'bg-black-50 hover:!bg-black-50-hover disabled:bg-black-50',
  [PrimaryButtonType.Upload]:
    'text-black border-border bg-white hover:!border-border hover:!text-black hover:!bg-primary-light-blue-10 disabled:bg-white disabled:text-black',
  [PrimaryButtonType.Danger]: 'bg-red hover:!bg-red-hover disabled:bg-red-disable',
}

export const PrimaryButton = ({ buttonType = PrimaryButtonType.Primary1, children, className, ...props }: Props) => {
  const buttonClassNames = buttonTypesClasses[buttonType]

  return (
    <Button
      size='large'
      autoInsertSpace={false}
      type={buttonType === PrimaryButtonType.Upload ? 'default' : 'primary'}
      className={cn(
        'shadow-none disabled:opacity-50 disabled:pointer-events-none text-white disabled:text-white text-base font-medium',
        buttonClassNames,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
