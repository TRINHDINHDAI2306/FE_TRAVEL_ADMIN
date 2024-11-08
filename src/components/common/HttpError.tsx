import { Flex, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PrimaryButton } from '@/components/common/button/PrimaryButton'
import { PageTransition } from '@/components/common/PageTransition.tsx'
import { PrimaryButtonType } from '@/types/enum'
import { API_STATUS, URL } from '@/utils/constants'

type Props = {
  errorCode: 404 | 403 | 500 | 'ERR_NETWORK'
}

export const HttpError = ({ errorCode }: Props) => {
  const { t } = useTranslation()

  const HomeButton = (
    <PrimaryButton buttonType={PrimaryButtonType.Primary1}>
      <Link to={URL.HOME}>{t('button:BUTTON.BACK_TO_HOME')}</Link>
    </PrimaryButton>
  )

  switch (errorCode) {
    case API_STATUS.FORBIDDEN: {
      return (
        <PageTransition>
          <Flex align='center' justify='center' className='h-screen'>
            <Result
              status={403}
              title={API_STATUS.FORBIDDEN}
              subTitle={t('common:ERROR_PAGE.403')}
              extra={HomeButton}
            />
          </Flex>
        </PageTransition>
      )
    }
    case API_STATUS.INTERNAL_SERVER: {
      return (
        <PageTransition>
          <Flex align='center' justify='center' className='h-screen'>
            <Result
              status={500}
              title={API_STATUS.INTERNAL_SERVER}
              subTitle={t('common:ERROR_PAGE.500')}
              extra={HomeButton}
            />
          </Flex>
        </PageTransition>
      )
    }
    case 'ERR_NETWORK': {
      return (
        <PageTransition>
          <Flex align='center' justify='center' className='h-screen'>
            <Result status='warning' title={t('common:ERROR_PAGE.ERR_NETWORK')} />
          </Flex>
        </PageTransition>
      )
    }
    default: {
      return (
        <PageTransition>
          <Flex align='center' justify='center' className='h-screen'>
            <Result
              status={404}
              title={API_STATUS.NOT_FOUND}
              subTitle={t('common:ERROR_PAGE.404')}
              extra={HomeButton}
            />
          </Flex>
        </PageTransition>
      )
    }
  }
}
