import { I18nInstance as i18n } from '@/lib/i18n'

export const DATA_DEFAULT = 'DATA_DEFAULT_FOR_LOAD_PAGE'

export const ROLES = ['SUPER_ADMIN', 'HR_COMPANY', 'ADMIN_COMPANY', 'NORMAL_USERS']

export const ERROR_FORBIDDEN_MESSAGE = 'dont have permission'

export const URL = {
  HOME: '/',
  MANAGE_ADMIN: '/manage-admin',
  MANAGE_USER: '/manage-user',
  MANAGE_GUIDE: '/manage-guide',
  ACTIVE_ADMIN: '/activate-account/:token',
  MANAGE_VOUCHER: '/manage-voucher',
  MANAGE_BLOG: '/manage-blog',
  BLOG_DETAIL: '/manage-blog/:id',
  STATISTICS: '/statistics',
  LOGIN: '/login',
  MANAGE_TOUR: '/manage-tour',
  TOUR_DETAIL: '/manage-tour/:id',
  SYSTEM: '/system',
  MANAGE_WITHDRAWAL: '/manage-withdrawal',
  REPORT_GUIDE: '/report-guide',
  REPORT_POST: '/report-post',
}

export const API_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
  ERR_NETWORK: 'ERR_NETWORK',
}

export const ITEMS_PER_PAGE_OPTIONS = [
  { value: 10, label: `10 / ${i18n.t('common:TABLE.PAGE')}` },
  { value: 20, label: `20 / ${i18n.t('common:TABLE.PAGE')}` },
  { value: 50, label: `50 / ${i18n.t('common:TABLE.PAGE')}` },
  { value: 100, label: `100 / ${i18n.t('common:TABLE.PAGE')}` },
]

export const MAX_LENGTH = {
  100: 100,
  255: 255,
  1000: 1000,
}

export const MAX_USERS = {
  PARTNER: 3,
  PRIME: 200,
}

export const MAX_CURRENCY = 999999999999999

export const MAX_NUMBER_INT = 2000000000

export const MAX_PERCENT = 100
