import { BaseSearchDTO } from '@/types/common'

export type VoucherList = {
  id: number
  name: string
  code: string
  discountType: string
  value: number
  startDate: string
  endDate: string
  quantity: number
}

export type ManageVoucherDTO = BaseSearchDTO
