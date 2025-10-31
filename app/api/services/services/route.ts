import { NextResponse } from 'next/server'
import { ServiceCategory } from '@/features/services/types/types'

const dummyData: ServiceCategory[] = [
	{
		id: 1,
		name: 'Telefonía',
		order: 1,
		createdAt: '2025-01-01T10:00:00Z',
		updatedAt: '2025-01-01T10:00:00Z',
		companies: [
			{
				id: 10,
				categoryCompanyId: 1,
				name: 'Telcel',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599088/telcel.jpg',
				order: 1,
				isOnHome: true,
				createdAt: '2025-01-01T10:00:00Z',
				updatedAt: '2025-01-01T10:00:00Z',
				abbreviation: 'BA',
				type: 'TAE'
			},
			{
				id: 11,
				categoryCompanyId: 1,
				name: 'Movistar',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599307/movistar.jpg',
				order: 2,
				isOnHome: false,
				createdAt: '2025-01-02T09:30:00Z',
				updatedAt: '2025-01-02T09:30:00Z',
				abbreviation: 'CM',
				type: 'TAE'
			},
			{
				id: 12,
				categoryCompanyId: 1,
				name: 'AT&T',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599381/att.png',
				order: 2,
				isOnHome: false,
				createdAt: '2025-01-02T09:30:00Z',
				updatedAt: '2025-01-02T09:30:00Z',
				abbreviation: 'CM',
				type: 'TAE'
			},
			{
				id: 13,
				categoryCompanyId: 1,
				name: 'Bait',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599474/bait.webp',
				order: 2,
				isOnHome: false,
				createdAt: '2025-01-02T09:30:00Z',
				updatedAt: '2025-01-02T09:30:00Z',
				abbreviation: 'CM',
				type: 'TAE'
			},
			{
				id: 14,
				categoryCompanyId: 1,
				name: 'Virgin',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599540/virgin.png',
				order: 2,
				isOnHome: false,
				createdAt: '2025-01-02T09:30:00Z',
				updatedAt: '2025-01-02T09:30:00Z',
				abbreviation: 'CM',
				type: 'TAE'
			},
			{
				id: 15,
				categoryCompanyId: 1,
				name: 'Unefon',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599808/unefon.png',
				order: 2,
				isOnHome: false,
				createdAt: '2025-01-02T09:30:00Z',
				updatedAt: '2025-01-02T09:30:00Z',
				abbreviation: 'CM',
				type: 'TAE'
			},
		],
	},
	{
		id: 2,
		name: 'Servicios',
		order: 2,
		createdAt: '2025-01-05T12:00:00Z',
		updatedAt: '2025-01-05T12:00:00Z',
		companies: [
			{
				id: 20,
				categoryCompanyId: 2,
				name: 'CFE',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
				order: 1,
				isOnHome: true,
				createdAt: '2025-01-05T12:00:00Z',
				updatedAt: '2025-01-05T12:00:00Z',
				abbreviation: 'SV',
				type: 'SERVICE'
			},
			{
				id: 21,
				categoryCompanyId: 2,
				name: 'CEA',
				icon: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599871/cea.png',
				order: 1,
				isOnHome: true,
				createdAt: '2025-01-05T12:00:00Z',
				updatedAt: '2025-01-05T12:00:00Z',
				abbreviation: 'SV',
				type: 'SERVICE'
			},
		],
	},
]

export async function GET(): Promise<NextResponse> {
	try {
		return NextResponse.json(
			{
				data: dummyData,
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error('API.SERVICES.SERVICES.GET::error', error)
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
