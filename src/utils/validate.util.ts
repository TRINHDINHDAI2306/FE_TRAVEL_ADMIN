import dayjs from 'dayjs'
import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'

export const vStringOptional = z.string().optional()

export const vStringRequired = (field: string) =>
  z
    .string({ required_error: i18n.t('zod:errors.string.required', { field }) })
    .min(1, i18n.t('zod:errors.string.required', { field }))

export const vDate = (field: string) =>
  z.preprocess(
    (value) => {
      if (dayjs.isDayjs(value)) return value.toDate()
      return value
    },
    z.date({ required_error: i18n.t('zod:errors.string.required', { field }) }),
  )

export const vStringLength = (field: string, length: number) =>
  z.string().length(length, i18n.t('zod:errors.string.length', { field, length }))

export const vNumberBetween = (field: string, min: number, max: number) =>
  z
    .number()
    .min(min, i18n.t('zod:errors.number.min', { field, min }))
    .max(max, i18n.t('zod:errors.number.max', { field, max }))

export const vNumberRequired = (field: string) => z.number().min(1, i18n.t('zod:errors.number.type', { field }))

export const vStringInArray = (field: string, list: string[]) =>
  z.string().refine((value) => list.includes(value), {
    message: i18n.t('zod:errors.array.in', { field, values: list.join(', ') }),
  })
