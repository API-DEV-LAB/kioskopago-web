import API from '@/lib/axios'

export interface Transaction {
	id: string
	folio: string
	storeId: string
	storeName: string
	adminId: string | null
	type: 'SALE' | 'TOPUP' | 'REFUND'
	baseAmount: number
	bonusPercentage: number
	totalAmount: number
	reference: string | null
	status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED'
	createdAt: string
}

export interface ListTransactionsResponse {
	transactions: Transaction[]
	total: number
	page: number
	limit: number
	totalPages: number
}

export async function listTransactions(params?: {
	page?: number
	limit?: number
	type?: string
	status?: string
	storeId?: string
}): Promise<ListTransactionsResponse> {
	const response = await API.get<ListTransactionsResponse>('/transactions', {
		params,
	})
	return response.data
}
