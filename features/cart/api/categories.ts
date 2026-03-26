import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { CategoriesResponse } from '@/features/cart/types/types'

export async function CartCategoriesGet(): Promise<AxiosResponse<CategoriesResponse>> {
	try {
		const response = await API.get('/cart/categories')
		return response.data.data
	} catch (error) {
		console.error('CartCategoriesGet::error', error)
		throw error
	}
}
