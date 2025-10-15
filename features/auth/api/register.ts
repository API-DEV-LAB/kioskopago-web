import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { RegisterProps } from '@/features/auth/types/types'

export async function AuthRegisterPost(registerData: RegisterProps): Promise<AxiosResponse> {
	const requestBody: RegisterProps = {
		storeName: registerData.storeName,
		storeAddress: registerData.storeAddress,
		storeLocation: registerData.storeLocation,
		ownerName: registerData.ownerName,
		phoneNumber: registerData.phoneNumber,
		rfc: registerData.rfc,
		email: registerData.email,
		acceptTerms: registerData.acceptTerms
	}

	try {
		const response = await API.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
			data: JSON.stringify(requestBody),
		})
		const data: AxiosResponse = await response.data
		return data
	} catch (error) {
		console.error('AuthRegisterPost::error', error)
		throw error
	}
}
