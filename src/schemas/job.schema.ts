import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired, vNumberRequired } from '@/utils/validate.util'

export const JOB_SCHEMA = z.object({
  job_title: vStringRequired(i18n.t('form:title')),
  job_salary: vNumberRequired(i18n.t('form:salary')),
  job_address: vStringRequired(i18n.t('form:address')),
  job_experience: vStringRequired(i18n.t('form:experience')),
  job_description: vStringRequired(i18n.t('form:description')),
  job_requirements: vStringRequired(i18n.t('form:requirement')),
  job_benefits: vStringRequired(i18n.t('form:benefit')),
  job_address_detail: vStringRequired(i18n.t('form:detailAddress')),
  job_application_method: vStringRequired(i18n.t('form:applicationMethod')),
  company_id: vNumberRequired(i18n.t('form:company')),
  occupation_id: vNumberRequired(i18n.t('form:occupation')),
})
