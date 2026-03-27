import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { CategoriesResponse } from '@/features/cart/types/types'

export async function CartCategoriesGet(
	id: string,
): Promise<AxiosResponse<CategoriesResponse>> {
	try {
		const response = await API.get('/products?companyId=' + id)
		return response.data.items
	} catch (error) {
		console.error('CartCategoriesGet::error', error)
		throw error
	}
}

export async function PayPost(
	data: any,
): Promise<AxiosResponse<CategoriesResponse>> {
	console.log(data)
	try {
		const payload = {
			productId: data.id,
			phoneNumber: data.phone,
			reference: '',
			notes: '',
		}
		const response = await API.post('/transactions/sale', payload)
		return response.data.items
	} catch (error) {
		console.error('CartCategoriesGet::error', error)
		throw error
	}
}
