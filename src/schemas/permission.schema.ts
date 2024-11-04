import { z } from 'zod'

import { I18nInstance as i18n } from '@/lib/i18n'
import { vStringRequired } from '@/utils/validate.util'

export const PERMISSION_SCHEMA = z.object({
  api_name: vStringRequired(i18n.t('form:name')),
  api_path: vStringRequired(i18n.t('form:path')),
  api_method: vStringRequired(i18n.t('form:method')),
  api_description: vStringRequired(i18n.t('form:description')),
})
