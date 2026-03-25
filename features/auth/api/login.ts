import API from '@/lib/axios'
import { AxiosResponse } from 'axios'

export async function AuthLoginPost(phoneNumber: string): Promise<{ message: string; expiresIn: number }> {
	try {
		const response = await API.post('/auth/otp/request', { phoneNumber })
		return response.data
	} catch (error) {
		console.error('AuthLoginPost::error', error)
		throw error
	}
}
