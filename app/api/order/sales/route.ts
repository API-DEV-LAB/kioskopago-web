import { NextResponse } from 'next/server'
import { Sale } from '@/features/order/types/types'

const salesData: Sale[] = [
    {
        id: 'PUR-001',
        date: '2025-01-10',
        status: 'completado',
        phone: '5512345678',
        company: 'CFE',
        total: 1650.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-002',
        date: '2025-01-09',
        status: 'pendiente',
        phone: '5587654321',
        company: 'CEA',
        total: 2530.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-003',
        date: '2025-01-08',
        status: 'completado',
        phone: '5524681357',
        company: 'Netflix',
        total: 3520.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-004',
        date: '2025-01-07',
        status: 'cancelado',
        phone: '5598765432',
        company: 'Telcel',
        total: 1980.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-005',
        date: '2025-01-06',
        status: 'completado',
        phone: '5534567890',
        company: 'Movistar',
        total: 1045.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-006',
        date: '2025-01-05',
        status: 'pendiente',
        phone: '5565432109',
        company: 'AT&T',
        total: 1320.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-007',
        date: '2025-01-04',
        status: 'completado',
        phone: '5578901234',
        company: 'CFE',
        total: 6160.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
    {
        id: 'PUR-008',
        date: '2025-01-03',
        status: 'completado',
        phone: '5543218765',
        company: 'Xbox',
        total: 880.0,
        image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
    },
]

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json(
            {
                data: salesData
            },
            { status: 200 }
        )

    } catch (error) {
        console.error('API.ORDER.SALES.GET::error', error)
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
