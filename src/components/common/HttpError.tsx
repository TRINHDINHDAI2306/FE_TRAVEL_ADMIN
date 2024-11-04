import { PageTransition } from '@/components/common/PageTransition.tsx'

type Prop = {
  errorCode: 404 | 403 | 500
  message?: string
}

export const HttpError = ({ errorCode, message = 'This page could not be found.' }: Prop) => {
  return (
    <PageTransition>
      <div className='absolute top-1/2 left-1/2 flex items-center translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='font-bold text-2xl m-0'>{errorCode}</h1>
        <div className='h-14 w-px bg-black m-6'></div>
        <h2 className='font-normal text-base m-0'>{message}</h2>
      </div>
    </PageTransition>
  )
}
