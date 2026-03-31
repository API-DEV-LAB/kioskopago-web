'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { listStores } from '@/features/admin/api/stores'
import { listUsers } from '@/features/admin/api/users'
import {
	listTransactions,
	Transaction,
} from '@/features/admin/api/transactions'

export default function AdminDashboardPage() {
	const [storeCount, setStoreCount] = useState<number | null>(null)
	const [userCount, setUserCount] = useState<number | null>(null)
	const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
		[],
	)

	useEffect(() => {
		listStores({ limit: 1 })
			.then((r) => setStoreCount(r.total))
			.catch(() => {})
		listUsers({ limit: 1 })
			.then((r) => setUserCount(r.total))
			.catch(() => {})
		listTransactions({ limit: 5 })
			.then((r) => setRecentTransactions(r.transactions))
			.catch(() => {})
	}, [])

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm text-muted-foreground">
							Total tiendas
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">
							{storeCount ?? '—'}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm text-muted-foreground">
							Total usuarios
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">{userCount ?? '—'}</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm text-muted-foreground">
							Transacciones recientes
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">
							{recentTransactions.length}
						</p>
					</CardContent>
				</Card>
			</div>

			<div>
				<h2 className="text-lg font-semibold mb-4">
					Últimas transacciones
				</h2>
				<div className="rounded-md border">
					<table className="w-full text-sm">
						<thead className="border-b bg-muted/50">
							<tr>
								<th className="px-4 py-3 text-left">Folio</th>
								<th className="px-4 py-3 text-left">Tienda</th>
								<th className="px-4 py-3 text-left">Tipo</th>
								<th className="px-4 py-3 text-right">Monto</th>
								<th className="px-4 py-3 text-left">Status</th>
							</tr>
						</thead>
						<tbody>
							{recentTransactions.length === 0 ? (
								<tr>
									<td
										colSpan={5}
										className="px-4 py-6 text-center text-muted-foreground"
									>
										Sin transacciones
									</td>
								</tr>
							) : (
								recentTransactions.map((t) => (
									<tr
										key={t.id}
										className="border-b last:border-0"
									>
										<td className="px-4 py-3 font-mono text-xs">
											{t.folio}
										</td>
										<td className="px-4 py-3">
											{t.storeName}
										</td>
										<td className="px-4 py-3">{t.type}</td>
										<td className="px-4 py-3 text-right">
											${Number(t.totalAmount).toFixed(2)}
										</td>
										<td className="px-4 py-3">
											<span
												className={`text-xs font-medium px-2 py-1 rounded-full ${
													t.status === 'SUCCESS'
														? 'bg-green-100 text-green-700'
														: t.status === 'FAILED'
															? 'bg-red-100 text-red-700'
															: 'bg-yellow-100 text-yellow-700'
												}`}
											>
												{t.status}
											</span>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
