import { AxiosError } from 'axios'
import { size } from 'lodash-es'

import { I18nInstance as i18n } from '@/lib/i18n'
import { Meta, Pagination, ResponseError } from '@/types/common.tsx'
import { DATA_DEFAULT } from '@/utils/constants.ts'

export const generateDefaultData = <T>(keys: Array<keyof Partial<T>>) => {
  return Array.from({ length: 10 }, (_, i) => {
    const obj = {} as Record<keyof T, any>
    keys.map((key) => {
      obj[key] = key === 'id' ? i + 100 : DATA_DEFAULT
    })
    return obj
  })
}

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('ja-JP').format(currency)
}

export const transformNum = (val?: string | number | unknown) => {
  if (!val || isNaN(Number(val))) {
    return (val || undefined) as any
  }
  return Number(val) as any
}

export const isDataLoadPage = (val: any) => val === DATA_DEFAULT

export const transformPagination = (meta?: Meta): Pagination => {
  return {
    pageSize: meta?.limit || 10,
    current: meta?.currentPage || 1,
    defaultCurrent: 1,
    total: meta?.total || 0,
  }
}
