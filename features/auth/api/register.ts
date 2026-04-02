import API from '@/lib/axios'
import { RegisterProps } from '@/features/auth/types'

export async function AuthRegisterPost(
	registerData: RegisterProps,
): Promise<{ message: string; expiresIn: number }> {
	const arrLocation = registerData.storeLocation.split(',')
	const requestBody = {
		name: registerData.ownerName,
		phone: `+52${registerData.phone}`,
		storeName: registerData.storeName,
		storeAddress: registerData.storeAddress,
		latitude: arrLocation[0],
		longitude: arrLocation[1],
	}

	try {
		const response = await API.post('/auth/register-grocer', requestBody)
		return response.data
	} catch (error) {
		console.error('AuthRegisterPost::error', error)
		throw error
	}
}
