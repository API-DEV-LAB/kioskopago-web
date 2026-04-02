import { NextResponse } from 'next/server'
import { CategoriesResponse } from '@/features/cart/types/types'

const packages: CategoriesResponse[] = [
	{
		id: '1',
		name: 'Compra de tiempo aire',
		total: 10,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '2',
		name: 'Compra de tiempo aire',
		total: 20,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '3',
		name: 'Compra de tiempo aire',
		total: 30,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '4',
		name: 'Compra de tiempo aire',
		total: 40,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '5',
		name: 'Compra de tiempo aire',
		total: 50,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '6',
		name: 'Compra de tiempo aire',
		total: 80,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
	{
		id: '7',
		name: 'Compra de tiempo aire',
		total: 100,
		description: 'Whatsapp ilimitado, 500MB redes sociales',
		expired: 7,
	},
]

export async function GET(): Promise<NextResponse> {
	try {
		return NextResponse.json(
			{
				data: packages,
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error('API.CART.CATEGORIES.GET::error', error)
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
