import API from '@/lib/axios'

export async function AuthVerificationPost(phoneNumber: string, otp: string): Promise<{ accessToken: string; refreshToken: string; expiresIn: number; user: object }> {
	try {
		const response = await API.post('/auth/otp/verify', { phoneNumber, otp })
		return response.data
	} catch (error) {
		console.error('AuthVerificationPost::error', error)
		throw error
	}
}
