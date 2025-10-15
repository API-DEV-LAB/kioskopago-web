import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { ServicesResponse } from '@/features/home/types/types'

export async function HomeServicesGet(): Promise<AxiosResponse<ServicesResponse>> {
	try {
		const response = await API.get(`${process.env.NEXT_PUBLIC_API_URL}/home/services`)
		const data: AxiosResponse = await response.data.data
		return data
	} catch (error) {
		console.error('HomeServicesGet::error', error)
		throw error
	}
}
