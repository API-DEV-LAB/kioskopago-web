import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { ServicesResponse } from '@/features/services/types/types'

export async function ServicesServicesGet(): Promise<AxiosResponse<ServicesResponse>> {
	try {
		const response = await API.get(`${process.env.NEXT_PUBLIC_API_URL}/services/services`)
		const data: AxiosResponse = await response.data.data
		return data
	} catch (error) {
		console.error('ServicesServicesGet::error', error)
		throw error
	}
}
