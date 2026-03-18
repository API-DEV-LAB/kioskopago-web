import API from '@/lib/axios'

export type TransactionType = 'SALE' | 'TOPUP' | 'REFUND'
export type TransactionStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED'

export interface Transaction {
  id: string
  folio: string
  storeId: string
  storeName: string
  adminId?: string
  adminName?: string
  type: TransactionType
  baseAmount: number
  bonusPercentage: number
  totalAmount: number
  reference?: string
  status: TransactionStatus
  providerResponse?: unknown
  createdAt: string
  updatedAt: string
}

export interface ListTransactionsParams {
  page?: number
  limit?: number
  type?: TransactionType
  status?: TransactionStatus
  storeId?: string
  search?: string
}

export async function listTransactions(params?: ListTransactionsParams) {
  const response = await API.get<{ transactions: Transaction[]; total: number; page: number; limit: number; totalPages: number }>('/transactions', { params })
  return response.data
}
