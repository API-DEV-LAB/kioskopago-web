import { NextRequest, NextResponse } from 'next/server'
import { RegisterProps } from '@/features/auth/types/types'

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const body: RegisterProps = await request.json()
		const {
			storeName,
			storeAddress,
			storeLocation,
			ownerName,
			phone,
			rfc,
			email,
			acceptTerms,
		} = body
		return NextResponse.json(
			{
				success: true,
				message: 'Registro de tienda exitoso',
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error('API.AUTH.REGISTER.POST::error', error)
		return NextResponse.json(
			{
				success: false,
				message: 'Error interno del servidor',
				error: 'Internal server error',
			},
			{ status: 500 },
		)
	}
}
