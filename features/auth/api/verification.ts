import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { VerificationProps } from '@/features/auth/types/types'

export async function AuthVerificationPost(code: string): Promise<AxiosResponse> {
	const requestBody: VerificationProps = {
		code
	}
	try {
		const response = await API.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
			data: JSON.stringify(requestBody),
		})
		const data: AxiosResponse = await response.data
		return data
	} catch (error) {
		console.error('AuthVerificationPost::error', error)
		throw error
	}
}
