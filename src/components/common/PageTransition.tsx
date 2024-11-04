import { motion as m } from 'framer-motion'
import { FC, ReactNode } from 'react'

type Prop = {
  children: ReactNode
}

export const PageTransition: FC<Prop> = ({ children }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </m.div>
  )
}
