import API from '@/lib/axios'
import { AdminLoginProps, AuthResponse } from '@/features/auth/types'

export async function adminLogin(data: AdminLoginProps): Promise<AuthResponse> {
	const response = await API.post<AuthResponse>('/auth/login', data)
	return response.data
}
