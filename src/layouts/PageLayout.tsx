import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageTransition } from '@/components/common/PageTransition.tsx'

type Props = {
  title: string
  children: ReactNode
}
export const PageLayout = ({ title, children }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageTransition>{children}</PageTransition>
    </>
  )
}
