import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired } from '@/utils/validate.util.ts'

export const UPDATE_RESUMES_SCHEMA = z.object({
  application_status: vStringRequired(i18n.t('resumes:form.status')),
})

export type UpdateResumes = z.infer<typeof UPDATE_RESUMES_SCHEMA>
