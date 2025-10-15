import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { CategoriesResponse } from '@/features/cart/types/types'

export async function CartCategoriesGet(): Promise<AxiosResponse<CategoriesResponse>> {
	try {
		const response = await API.get(`${process.env.NEXT_PUBLIC_API_URL}/cart/categories`)
		const data: AxiosResponse = await response.data.data
		return data
	} catch (error) {
		console.error('CartCategoriesGet::error', error)
		throw error
	}
}
