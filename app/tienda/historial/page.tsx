'use client'
import { useEffect, useState } from 'react'
import {
	listTransactions,
	Transaction,
} from '@/features/admin/api/transactions'

export default function HistorialPage() {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		listTransactions({ page, limit: 10 })
			.then((r) => {
				setTransactions(r.transactions)
				setTotal(r.total)
			})
			.catch(() => {})
			.finally(() => setIsLoading(false))
	}, [page])

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Historial de compras</h1>

			{isLoading ? (
				<div className="space-y-3">
					{Array.from({ length: 5 }).map((_, i) => (
						<div
							key={i}
							className="h-14 bg-muted rounded animate-pulse"
						/>
					))}
				</div>
			) : (
				<>
					<div className="rounded-md border">
						<table className="w-full text-sm">
							<thead className="border-b bg-muted/50">
								<tr>
									<th className="px-4 py-3 text-left">
										Folio
									</th>
									<th className="px-4 py-3 text-left">
										Referencia
									</th>
									<th className="px-4 py-3 text-right">
										Monto
									</th>
									<th className="px-4 py-3 text-left">
										Status
									</th>
									<th className="px-4 py-3 text-left">
										Fecha
									</th>
								</tr>
							</thead>
							<tbody>
								{transactions.length === 0 ? (
									<tr>
										<td
											colSpan={5}
											className="px-4 py-8 text-center text-muted-foreground"
										>
											Sin transacciones aún
										</td>
									</tr>
								) : (
									transactions.map((t) => (
										<tr
											key={t.id}
											className="border-b last:border-0"
										>
											<td className="px-4 py-3 font-mono text-xs">
												{t.folio}
											</td>
											<td className="px-4 py-3 text-muted-foreground">
												{t.reference || '—'}
											</td>
											<td className="px-4 py-3 text-right font-medium">
												$
												{Number(t.totalAmount).toFixed(
													2,
												)}
											</td>
											<td className="px-4 py-3">
												<span
													className={`text-xs font-medium px-2 py-1 rounded-full ${
														t.status === 'SUCCESS'
															? 'bg-green-100 text-green-700'
															: t.status ===
																  'FAILED'
																? 'bg-red-100 text-red-700'
																: 'bg-yellow-100 text-yellow-700'
													}`}
												>
													{t.status}
												</span>
											</td>
											<td className="px-4 py-3 text-muted-foreground">
												{new Date(
													t.createdAt,
												).toLocaleDateString('es-MX')}
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>

					<div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
						<span>{total} transacciones</span>
						<div className="flex gap-2">
							<button
								className="px-3 py-1 border rounded text-sm disabled:opacity-40"
								disabled={page === 1}
								onClick={() => setPage((p) => p - 1)}
							>
								Anterior
							</button>
							<button
								className="px-3 py-1 border rounded text-sm disabled:opacity-40"
								disabled={transactions.length < 10}
								onClick={() => setPage((p) => p + 1)}
							>
								Siguiente
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
