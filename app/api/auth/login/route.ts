import { NextRequest, NextResponse } from 'next/server'
import { LoginProps } from '@/features/auth/types/types'

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const body: LoginProps = await request.json()
		const { phoneNumber } = body
		return NextResponse.json(
			{
				success: true,
				message: 'Código de verificación enviado exitosamente',
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error('API.AUTH.LOGIN.POST::error', error)
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
