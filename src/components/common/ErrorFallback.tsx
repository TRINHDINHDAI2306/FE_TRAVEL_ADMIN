import { AxiosError } from 'axios'
import { motion as m } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { useLocation } from 'react-router-dom'

import { HttpError } from '@/components/common/HttpError.tsx'
import { ERROR_FORBIDDEN_MESSAGE } from '@/utils/constants.ts'

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      key={location?.pathname}
    >
      {children}
    </m.div>
  )
}

export const ErrorFallback = ({ error }: { error?: any }) => {
  const location = useLocation()
  const { resetBoundary } = useErrorBoundary()
  const { pathname, search } = useLocation()
  const originalPathname = useRef(pathname)
  const originalSearch = useRef(search)

  useEffect(() => {
    const loader = document.querySelector('.loader-app')
    if (loader) {
      loader.remove()
    }
    if (
      pathname !== originalPathname.current ||
      (pathname === originalPathname.current && originalSearch.current !== search)
    ) {
      resetBoundary()
    }
  }, [location?.pathname, location?.search, error])

  if (!window.navigator.onLine) {
    return (
      <PageTransition>
        <div className='absolute top-1/2 left-1/2 flex items-center translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='font-bold text-2xl m-0'>Network Error</h1>
          <div className='h-14 w-px bg-black m-6'></div>
          <h2 className='font-normal text-base m-0'>This page could not be found.</h2>
        </div>
      </PageTransition>
    )
  }

  if (error instanceof AxiosError) {
    if (error?.code === 'ERR_NETWORK') {
      return (
        <PageTransition>
          <div className='absolute top-1/2 left-1/2 flex items-center translate-x-[-50%] translate-y-[-50%]'>
            <h1 className='font-bold text-2xl m-0'>Network Error</h1>
            <div className='h-14 w-px bg-black m-6'></div>
            <h2 className='font-normal text-base m-0'>This page could not be found.</h2>
          </div>
        </PageTransition>
      )
    }
    return <HttpError errorCode={error?.response?.status as any} key={error?.response?.status} />
  }

  if (error?.message === ERROR_FORBIDDEN_MESSAGE) {
    return <HttpError errorCode={403} />
  }

  return <HttpError errorCode={404} />
}
