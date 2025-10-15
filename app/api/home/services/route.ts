import { NextResponse } from 'next/server'

const services = [
	{
		id: 1,
		name: 'CFE',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
	},
	{
		id: 2,
		name: 'CEA',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599871/cea.png',
	},
	{
		id: 3,
		name: 'Telcel',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599088/telcel.jpg',
	},
	{
		id: 4,
		name: 'Movistar',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599307/movistar.jpg',
	},
	{
		id: 5,
		name: 'AT&T',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599381/att.png',
	},
	{
		id: 6,
		name: 'Bait',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599474/bait.webp',
	},
	{
		id: 7,
		name: 'Virgin',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599540/virgin.png',
	},
	{
		id: 8,
		name: 'Unefon',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599808/unefon.png',
	},
]

export async function GET(): Promise<NextResponse> {
	try {
		return NextResponse.json(
			{
				data: services
			},
			{ status: 200 }
		)

	} catch (error) {
		console.error('API.HOME.SERVICES.GET::error', error)
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
