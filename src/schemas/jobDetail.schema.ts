import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired } from '@/utils/validate.util'

export const JOB_DETAIL_SCHEMA = z.object({
  id: z.number().int(),
  job_title: vStringRequired(i18n.t('jobDetail:ttitle')),
  job_salary: z.number().int(),
  job_address: vStringRequired(i18n.t('jobDetail:address')),
  job_experience: vStringRequired(i18n.t('jobDetail:experience')),
  job_description: vStringRequired(i18n.t('jobDetail:description')),
  job_requirements: vStringRequired(i18n.t('jobDetail:requirements')),
  job_benefits: vStringRequired(i18n.t('jobDetail:benefits')),
  job_address_detail: vStringRequired(i18n.t('jobDetail:addressDetail')),
  job_application_method: vStringRequired(i18n.t('jobDetail:applicationMethod')),
  company_avatar_link: vStringRequired(i18n.t('jopDetail:avatarCompany')),
})
export type Job = z.infer<typeof JOB_DETAIL_SCHEMA>

export const ApplyJobSchema = z.object({
  job_id: z.number().int(),
  user_id: z.number().int(),
  resume_object_key: z.string(),
})

export type ApplyJobDTO = z.infer<typeof ApplyJobSchema>
