import { AnimatePresence } from 'framer-motion'
import { ReactNode, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'

import { useGetMe } from '@/api/user/me'
import authStore from '@/stores/auth.store.ts'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const setAuth = authStore.use.setAuth()
  const setIsInitialize = authStore.use.setIsInitialize()
  const isInitialize = authStore.use.isInitialize()
  const { t } = useTranslation()
  z.setErrorMap(makeZodI18nMap({ t, handlePath: { ns: ['zod'] } }))

  const { data, isFetched, isSuccess, isError } = useGetMe({ throwOnError: false })

  useLayoutEffect(() => {
    if (isFetched) {
      const loader = document.querySelector('.loader-app')
      if (loader) {
        loader.remove()
      }
    }
    if (isSuccess) {
      setAuth(data.returnValue)
      setIsInitialize('success')
    }

    if (isError) {
      setIsInitialize('error')
    }
  }, [isFetched, isSuccess, isError])

  if (isInitialize === 'isLoading') {
    return null
  }

  return (
    <>
      <AnimatePresence>{children}</AnimatePresence>
    </>
  )
}
