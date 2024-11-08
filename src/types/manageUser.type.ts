import { BaseSearchDTO } from '@/types/common'

export type ManageUser = {
  id: number
  username: string
  email: string
  phone: string
  verifyStatus: string
}

export type ManageUserDTO = BaseSearchDTO
