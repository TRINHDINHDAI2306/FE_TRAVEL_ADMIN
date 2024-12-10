import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vNumberRequired, vStringRequired } from '@/utils/validate.util.ts'

export const emailSchema = vStringRequired(i18n.t('form:email')).email(i18n.t('zod:errors.email'))

const passwordSchema = vStringRequired(i18n.t('form:password')).regex(
  /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  i18n.t('zod:errors.password.regex'),
)

export const LOGIN_SCHEMA = z.object({
  user_email: emailSchema,
  user_password: vStringRequired(i18n.t('form:password')),
})

export type LoginDTO = z.infer<typeof LOGIN_SCHEMA>

export const REGISTER_SCHEMA = z
  .object({
    user_email: emailSchema,
    user_name: vStringRequired(i18n.t('form:name')),
    user_password: passwordSchema,
    user_confirmPassword: vStringRequired(i18n.t('form:confirmPassword')),
    user_age: vNumberRequired(i18n.t('form:age'), 1, 100),
    user_address: vStringRequired(i18n.t('form:address')),
  })
  .refine((data) => data.user_password === data.user_confirmPassword, {
    message: i18n.t('zod:errors.password.notMatch'),
    path: ['user_confirmPassword'],
  })

export type RegisterDTO = z.infer<typeof REGISTER_SCHEMA>

export type TUser = Omit<RegisterDTO, 'user_confirmPassword' | 'user_password'> & {
  id: number
  username: string
  user_date_of_birth: string
  user_phone_number: string
  user_sex: string
  client: string
  company_id: number
  role_id: number
  role_name: string
  user_avatar_url: string
  user_avatar_ojk: string
}

export const FORGOT_PASSWORD_SCHEMA = z.object({
  user_email: emailSchema,
})

export type ForgotPasswordDTO = z.infer<typeof FORGOT_PASSWORD_SCHEMA>

export const UPDATE_PASSWORD_SCHEMA = z
  .object({
    new_password: passwordSchema,
    confirm_newpassword: passwordSchema,
  })
  .refine((data) => data.new_password === data.confirm_newpassword, {
    message: 'Passwords do not match',
    path: ['confirm_newpassword'],
  })
export type UpdatePasswordDTO = z.infer<typeof UPDATE_PASSWORD_SCHEMA>
