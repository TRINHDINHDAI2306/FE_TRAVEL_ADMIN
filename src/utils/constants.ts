export const DATA_DEFAULT = 'DATA_DEFAULT_FOR_LOAD_PAGE'

export const ROLES = ['SUPER_ADMIN', 'HR_COMPANY', 'ADMIN_COMPANY', 'NORMAL_USERS']

export const ERROR_FORBIDDEN_MESSAGE = 'dont have permission'

export const URL = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  PERMISSION: '/permission',
  ROLE: '/role',
  JOB: '/job',
  JOB_DETAIL: '/job/details',
  JOB_LISTING: '/job/listings',
  RESUMES: '/resumes',
  FORBIDDEN: '/forbidden',
  USER: '/user',
  USERS: '/users',
  COMPANY: '/company',
  APPLIED_JOBS: '/user/appliedJobs',
  USER_UPDATE_PROFILE: '/user/updateProfile',
  ADMIN_UPDATE_PROFILE: '/updateProfile',
  COMPANY_DETAIL: '/company/details',
  BACK: -1,
}

export const CREATE_URL = {
  JOB: '/job/create',
  PERMISSION: '/permission/create',
  ROLE: '/role/create',
  COMPANY: '/company/create',
  CREATE_HR: '/users/create_hr',
}

export const EDIT_URL = {
  JOB: '/job/edit',
  PERMISSION: '/permission/edit',
  ROLE: '/role/edit',
  RESUMES: '/resumes/edit',
  COMPANY: '/company/edit',
}

export const SEX = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
}

export const OTP_LENGTH = 6
