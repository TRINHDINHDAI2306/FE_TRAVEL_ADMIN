import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { emailSchema } from '@/schemas/auth.schema'
import { SEX } from '@/utils/constants'
import { vDate, vStringInArray, vStringLength, vStringRequired } from '@/utils/validate.util'

export const USER_SCHEMA = z.object({
  id: z.number(),
  name: z.string().nullish(),
  email: z.string(),
  createdAt: z.string().nullish(),
})

export const UPDATE_USER_SCHEMA = z.object({
  user_name: vStringRequired(i18n.t('form:name')),
  user_phone_number: vStringLength(i18n.t('form:phoneNumber'), 10),
  user_address: vStringRequired(i18n.t('form:address')),
  user_date_of_birth: vDate(i18n.t('form:dateOfBirth')),
  user_avatar_ojk: vStringRequired(i18n.t('form:avatar')),
  user_sex: vStringInArray(i18n.t('form:sex'), Object.values(SEX)),
})

export type User = z.infer<typeof USER_SCHEMA>
export type TUpdateUser = z.infer<typeof UPDATE_USER_SCHEMA>

export const USERS_SCHEMA = z.object({
  id: z.number().int(),
  user_email: vStringRequired(i18n.t('form:email')),
  user_name: vStringRequired(i18n.t('form:name')),
  user_role: vStringRequired(i18n.t('form:role')),
  client: vStringRequired(i18n.t('form:client')),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Users = z.infer<typeof USERS_SCHEMA>

export const USER_HR_SCHEMA = z.object({
  user_email: vStringRequired(i18n.t('form:email')),
  company_id: z.number().int(),
})
export const HR_SCHEMA = z.object({
  user_email: emailSchema,
})
export type UserHR = z.infer<typeof USER_HR_SCHEMA>

export const CREATE_HR_USER_SCHEMA = USER_HR_SCHEMA

export type CreateUserHrDTO = z.infer<typeof CREATE_HR_USER_SCHEMA>
