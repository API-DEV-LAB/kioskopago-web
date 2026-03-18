import API from '@/lib/axios'

export interface Store {
  id: string
  name: string
  address: string
  phone?: string
  bonusPercentage: number
  userId: string
  createdAt: string
  updatedAt: string
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

export interface StoreBalance {
  storeId: string
  storeName: string
  currentBalance: number
  lastUpdated: string
}

export interface TopupDto {
  storeId: string
  amount: number
  reference?: string
}

export async function listStores(params?: { page?: number; limit?: number; search?: string }) {
  const response = await API.get<{ items: Store[]; total: number }>('/stores', { params })
  return response.data
}

export async function getStore(id: string) {
  const response = await API.get<Store>(`/stores/${id}`)
  return response.data
}

export async function createStore(data: CreateStoreDto) {
  const response = await API.post<Store>('/stores', data)
  return response.data
}

export async function updateStore(id: string, data: UpdateStoreDto) {
  const response = await API.patch<Store>(`/stores/${id}`, data)
  return response.data
}

export async function getStoreBalance(storeId: string) {
  const response = await API.get<StoreBalance>(`/balances/store/${storeId}`)
  return response.data
}

export async function topupStore(data: TopupDto) {
  const response = await API.post('/transactions/topup', data)
  return response.data
}
