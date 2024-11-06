import { BaseSearchDTO } from '@/types/common'

export type ManageAdmin = {
  id: number
  username: string
  email: string
  role: string
  status: string
}

export type ManageAdminDTO = BaseSearchDTO
