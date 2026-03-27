import API from '@/lib/axios'

export interface Store {
	id: string
	userId: string
	name: string
	address: string
	phone: string
	bonusPercentage: number
	balance: any
	createdAt: string
	user?: { id: string; name: string; email: string }
}

export interface StoreBalance {
	storeId: string
	storeName: string
	currentBalance: number
	lastTransactionId: string | null
	lastUpdated: string
}

export interface CreateStoreDto {
	name: string
	address: string
	phone?: string
	bonusPercentage?: number
}

export interface UpdateStoreDto {
	name?: string
	address?: string
	phone?: string
	bonusPercentage?: number
}

export interface TopupDto {
	storeId: string
	amount: number
	reference?: string
}

export interface ListStoresResponse {
	items: Store[]
	total: number
}

export async function listStores(params?: {
	page?: number
	limit?: number
	search?: string
}): Promise<ListStoresResponse> {
	const response = await API.get<ListStoresResponse>('/stores', { params })
	return response.data
}

export async function createStore(data: CreateStoreDto): Promise<Store> {
	const response = await API.post<Store>('/stores', data)
	return response.data
}

export async function updateStore(
	id: string,
	data: UpdateStoreDto,
): Promise<Store> {
	const response = await API.patch<Store>(`/stores/${id}`, data)
	return response.data
}

export async function getStoreBalance(storeId: string): Promise<StoreBalance> {
	const response = await API.get<StoreBalance>(`/balances/store/${storeId}`)
	return response.data
}

export async function topupStore(data: TopupDto) {
	const response = await API.post('/transactions/topup', data)
	return response.data
}
