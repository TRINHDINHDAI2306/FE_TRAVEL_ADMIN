export type Meta = {
  total: number
  limit: number
  totalPages: number
  currentPage: number
}

export type MetaData<T> = {
  count: number
  data: T
}

export type Response<T> = {
  statusCode: number
  message: string
  details?: []
  metaData?: T
  meta?: Meta
  returnValue?: returnValue
}

export type returnValue = {
  data?: []
  accessToken?: string
  refreshToken?: string
  total: number
  limit: number
  totalPages: number
  currentPage: number
}

export type Pagination = {
  current: number
  defaultCurrent: number
  pageSize: number
  total: number
}

export type Option = {
  value: string | number
  label: string
  disabled?: boolean
}

export type BaseSearchDTO = {
  skip?: number
  limit?: number
}

export type TitleContextType = {
  setTitle: (title: string) => void
}

export type TAdminContext = {
  setTitle: (title: string) => void
  setCreateLink: (createLink: string) => void
}

export type TOption = {
  label: string
  value: number | string
}

type TError = {
  code: string
  message: string
  details: {
    property: string
  }[]
}

export type ResponseError = {
  error: TError
}
