'use client'
import { useEffect, useState } from 'react'
import { Sale } from '@/features/order/types/types'
import { OrderSalesGet } from '@/features/order/api/sales'
import { SalesItem } from '@/features/order/components/SalesItem'

export default function SalesList() {
    const [sales, setSales] = useState<Sale[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [_, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchSales = async () => {
            try {
                setIsLoading(true)
                const response = await OrderSalesGet()
                // @ts-ignore
                setSales(response)
            } catch (error) {
                console.error('Error fetching sales:', error)
                setError('Error al cargar los servicios')
            } finally {
                setIsLoading(false)
            }
        }

        fetchSales()
    }, [])
    return (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mt-6">
            {isLoading && (
                Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="w-full h-[108px] bg-gray-200 rounded-lg animate-pulse" />
                ))
            )}
            {sales?.map((sale: Sale) => (
                <SalesItem
                    id={sale.id}
                    key={sale.id}
                    image={sale.image}
                    company={sale.company}
                    phone={sale.phone}
                    total={sale.total}
                    date={sale.date}
                    status={sale.status}
                />
            ))}
        </div>
    )
}

export { SalesList }