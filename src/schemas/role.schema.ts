import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired, vStringInArray } from '@/utils/validate.util'

export const ROLE_SCHEMA = z.object({
  role_name: vStringRequired(i18n.t('form:name')),
  role_status: vStringInArray(i18n.t('form:status'), ['ACTIVE', 'INACTIVE']),
})
