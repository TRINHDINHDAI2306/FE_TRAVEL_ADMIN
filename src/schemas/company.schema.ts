import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired } from '@/utils/validate.util.ts'

export const COMPANY_SCHEMA = z.object({
  company_name: vStringRequired(i18n.t('company:form.name')),
  company_link: z.string().url(),
  company_size: z.number().int(),
  company_introduction: vStringRequired(i18n.t('company:form.introduction')),
  company_address: vStringRequired(i18n.t('company:form.address')),
  company_object_key_img: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  admin_email: z.string().email(),
  banner_object_key_img: z.string(),
})

export const COMPANY_TOP = z.object({
  id: z.number().int(),
  company_link: z.string().url(),
  company_name: z.string(),
  company_address: z.string(),
  company_object_key_img: z.string(),
  companyAvatarUrl: z.string(),
})

export type CompanyTop = z.infer<typeof COMPANY_TOP>

export const UPDATE_COMPANY_SCHEMA = z.object({
  company_name: vStringRequired(i18n.t('company:form.name')),
  company_link: z.string().url(),
  company_size: z.number().int(),
  company_introduction: vStringRequired(i18n.t('company:form.introduction')),
  company_address: vStringRequired(i18n.t('company:form.address')),
  company_object_key_img: z.string(),
  banner_object_key_img: z.string(),
})

export type Company = z.infer<typeof COMPANY_SCHEMA>

export const CREATE_COMPANY_SCHEMA = COMPANY_SCHEMA

export type CreateCompanyDTO = z.infer<typeof CREATE_COMPANY_SCHEMA>
