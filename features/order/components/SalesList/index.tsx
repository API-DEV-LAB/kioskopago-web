'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { RiAlarmLine } from '@remixicon/react'
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
				setSales([])
			} catch (error) {
				console.error('Error fetching sales:', error)
				setError('Error al cargar el historial')
				setSales([])
			} finally {
				setIsLoading(false)
			}
		}

		fetchSales()
	}, [])
	return (
		<div className="space-y-3 mt-8 mb-[60px]">
			{isLoading &&
				Array.from({ length: 4 }).map((_, index) => (
					<Skeleton
						key={index}
						className="w-full h-[108px] rounded-lg"
					/>
				))}
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
			{sales?.length === 0 && (
				<Card className="border-dashed rounded-lg shadow-sm">
					<CardContent className="p-12 text-center">
						<div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
							<RiAlarmLine className="w-8 h-8 text-muted-foreground" />
						</div>
						<h3 className="font-semibold mb-2">No hay compras</h3>
						<p className="text-sm text-muted-foreground">
							Tus compras aparecerán aquí
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	)
}

export { SalesList }
