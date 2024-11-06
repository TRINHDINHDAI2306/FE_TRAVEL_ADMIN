import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vSelectRequired, vStringRequired } from '@/utils/validate.util'

export const ADMIN_SCHEMA = z.object({
  username: vStringRequired(i18n.t('manageAdmin:FIELD.USER_NAME')),
  email: vStringRequired(i18n.t('manageAdmin:FIELD.EMAIL')),
  role: vSelectRequired(i18n.t('manageAdmin:FIELD.ROLE')),
})

export type AdminDTO = z.infer<typeof ADMIN_SCHEMA>
