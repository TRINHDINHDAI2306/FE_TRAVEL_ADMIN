/* eslint-disable @typescript-eslint/no-explicit-any */
export type ManageWithDrawals = {
  transaction_id: number
  transaction_transaction_code: string | null
  transaction_amount: number
  transaction_time: string
  transaction_status: number
  transaction_type: string
  transaction_admin_id: number
  transaction_user_id: number
  transaction_tourguide_id: number | null
  user_id: number
  user_password: string
  user_email: string
  user_username: string
  user_phone: string
  user_balance: number
  user_available_balance: number
  user_voucher_point: number
  user_avartar: string
  user_status: number
  user_isSetup: any
  user_created_at: string
  user_updated_at: string
  user_deleted_at: string | null
  tourGuide_id: number | null
  tourGuide_password: string | null
  tourGuide_email: string | null
  tourGuide_name: string | null
  tourGuide_username: string | null
  tourGuide_phone: string | null
  tourGuide_bio: string | null
  tourGuide_gender: string | null
  tourGuide_balance: number | null
  tourGuide_available_balance: number | null
  tourGuide_avartar: string | null
  tourGuide_status: number | null
  tourGuide_available: boolean | null
  tourGuide_num_of_favorites: number | null
  tourGuide_cancelled_orders: number | null
  tourGuide_warning_time: string | null
  tourGuide_dob: string | null
  tourGuide_interview_date: string | null
  tourGuide_created_at: string | null
  tourGuide_updated_at: string | null
  tourGuide_deleted_at: string | null
}

export type TransformedWithdrawal = {
  id: number
  time: string
  transactionCode: string | null
  user: string
}

export type ManageWithDrawalsDTO = {
  limit?: number
  startDate: string
  endDate: string
  type?: 'ApprovalRequestWithDrawals' | 'HistoryWithDrawals'
}
