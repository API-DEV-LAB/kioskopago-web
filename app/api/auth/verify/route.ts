import { NextRequest, NextResponse } from 'next/server'
import { VerificationProps } from '@/features/auth/types/types'

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const body: VerificationProps = await request.json()
		const { code } = body
		return NextResponse.json(
			{
				success: true,
				message: 'Verificación exitosa',
			},
			{ status: 200 }
		)

	} catch (error) {
		console.error('API.AUTH.VERIFY.POST::error', error)
		return NextResponse.json(
			{
				success: false,
				message: 'Error interno del servidor',
				error: 'Internal server error'
			},
			{ status: 500 }
		)
	}
}


