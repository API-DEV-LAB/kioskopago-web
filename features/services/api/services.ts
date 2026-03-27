import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { ServicesResponse } from '@/features/services/types/types'

export async function ServicesServicesGet(): Promise<
	AxiosResponse<ServicesResponse>
> {
	try {
		const response = await API.get('/companies')
		return response.data.items
	} catch (error) {
		console.error('ServicesServicesGet::error', error)
		throw error
	}
}
