import { isNull, toNumber } from 'lodash-es'
import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { formatCurrency } from '@/utils/common'
import { MAX_CURRENCY, MAX_LENGTH } from '@/utils/constants.ts'

const PASSWORD_VALIDATION = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\-_,.@#$%^&*/:;\\+]{8,}$/)

const isNumeric = (value: string) => /^[0-9]*$/.test(value)

export const vString = z.string().transform((val) => (val.trim() ? val.trim() : undefined))

export const stringOptional = z.string().optional()

export const vStringRequired = (field: string) =>
  z
    .string({ required_error: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })

export const vStringRequiredWithLength = (field: string, maxLength: number) => {
  return z
    .string({ required_error: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .max(maxLength, { message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: maxLength }) })
}

export const vSelectRequired = (field: string) => {
  return z
    .string({
      required_error: i18n.t('message:ERROR.WEB_E_MSG_002', { field }),
      invalid_type_error: i18n.t('message:ERROR.WEB_E_MSG_002', { field }),
    })
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_002', { field }) })
}

export const vSelectOptional = () => {
  return z.string().nullable().optional()
}

export const vStringOptionalWithLength = (field: string, maxLength: number) => {
  return z
    .string()
    .max(maxLength, { message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: maxLength }) })
    .optional()
}

const optionalTextInput = (schema: z.ZodString) =>
  z
    .union([z.string(), z.undefined()])
    .refine((val) => !val || schema.safeParse(val).success, { message: i18n.t('message:ERROR.WEB_E_MSG_008') })

export const vEmailOptional = optionalTextInput(z.string().email())

export const vStringPassword = (field: string) =>
  z
    .string()
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .max(MAX_LENGTH[100], {
      message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: MAX_LENGTH[100] }),
    })
    .regex(PASSWORD_VALIDATION, {
      message: i18n.t('message:ERROR.WEB_E_MSG_002'),
    })

export const vStringEmail = (field: string) => {
  return z
    .string()
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .max(MAX_LENGTH[100], {
      message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: MAX_LENGTH[100] }),
    })
    .email({ message: i18n.t('message:ERROR.WEB_E_MSG_008') })
}

/* ====== Validate upload ====== */

export const vAttachmentRequired = (field: string) =>
  z.array(z.any()).nonempty({ message: i18n.t('message:ERROR.WEB_E_MSG_041', { field }) })

export const vAttachmentOptional = z.array(z.any())

export const vUploadFileRequiredFn = (field: string) =>
  z
    .array(
      z.object({
        uid: z.string().optional(),
        name: z.string(),
        size: z.number().optional(),
        type: z.string().optional(),
        originFileObj: z
          .object({
            uid: z.string(),
            lastModified: z.number(),
            name: z.string(),
            size: z.number(),
            type: z.string(),
          })
          .optional(),
      }),
    )
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_041', { field }) })

/* ====== Validate Number ====== */

export const vNumberRequired = (field: string, max: number = MAX_CURRENCY, min: number = 0) =>
  z
    .string({
      invalid_type_error: i18n.t('message:ERROR.WEB_E_MSG_001', { field }),
      required_error: i18n.t('message:ERROR.WEB_E_MSG_001', { field }),
    })
    .min(1, i18n.t('message:ERROR.WEB_E_MSG_001', { field }))
    .superRefine((value, ctx) => {
      if (isNull(value)) return
      const numValue = toNumber(value)
      if (numValue > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_025', {
            field: formatCurrency(max),
          }),
        })
      }
      if (numValue < min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_024', {
            field: formatCurrency(min),
          }),
        })
      }
    })

export const vNumberOptional = (max: number = MAX_CURRENCY, min: number = 0) =>
  z
    .string()
    .superRefine((value, ctx) => {
      if (isNull(value)) return
      const numValue = toNumber(value)
      if (numValue > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_025', {
            field: formatCurrency(max),
          }),
        })
      }
      if (numValue < min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_024', {
            field: formatCurrency(min),
          }),
        })
      }
    })
    .nullable()
    .optional()

export const vStringNumberRequired = (field: string, maxLength: number = MAX_LENGTH[100]) =>
  z
    .string({
      required_error: i18n.t('message:ERROR.WEB_E_MSG_001', { field }),
    })
    .min(1, { message: i18n.t('message:ERROR.WEB_E_MSG_001', { field }) })
    .superRefine((value, ctx) => {
      if (!isNumeric(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_042'),
        })
      }
      if (value.length > maxLength) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: maxLength }),
        })
      }
    })

export const vStringNumberOptional = (field: string, maxLength: number = MAX_LENGTH[100]) =>
  z
    .string()
    .superRefine((value, ctx) => {
      if (isNull(value)) return
      if (!isNumeric(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_042'),
        })
      }
      if (value.length > maxLength) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('message:ERROR.WEB_E_MSG_003', { field, field2: maxLength }),
        })
      }
    })
    .optional()

/* ====== End Validate Number ====== */
