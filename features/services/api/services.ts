import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { ServicesResponse } from '@/features/services/types/types'

export async function ServicesServicesGet(): Promise<AxiosResponse<ServicesResponse>> {
	try {
		const response = await API.get('/services/services')
		return response.data.data
	} catch (error) {
		console.error('ServicesServicesGet::error', error)
		throw error
	}
}
