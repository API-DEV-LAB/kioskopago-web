import API from '@/lib/axios'
import { RegisterProps } from '@/features/auth/types/types'

export async function AuthRegisterPost(
	registerData: RegisterProps,
): Promise<{ message: string; expiresIn: number }> {
	const requestBody = {
		name: registerData.ownerName,
		fatherLastname: '',
		motherLastname: '',
		phone: '+52' + registerData.phone,
		storeName: registerData.storeName,
		storeAddress: registerData.storeAddress,
		latitude: 0,
		longitude: 0,
	}

	try {
		const response = await API.post('/auth/register-grocer', requestBody)
		return response.data
	} catch (error) {
		console.error('AuthRegisterPost::error', error)
		throw error
	}
}
