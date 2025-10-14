import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { LoginProps } from '@/features/auth/types/types'

export async function AuthLoginPost(phoneNumber: string): Promise<AxiosResponse> {
	const requestBody: LoginProps = {
		phoneNumber
	}
	try {
		const response = await API.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
			data: JSON.stringify(requestBody),
		})
		const data: AxiosResponse = await response.data
		return data
	} catch (error) {
		console.error('AuthLoginPost::error', error)
		throw error
	}
}
