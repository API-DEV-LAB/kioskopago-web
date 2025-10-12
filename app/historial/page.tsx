'use client'

import { useState } from 'react'
import { Header } from '@/src/features/home/components/Header'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	RiSearchLine,
	RiFilterLine,
	RiArrowDropDownLine,
} from '@remixicon/react'

// Sample sales data
const salesData = [
	{
		id: 'PUR-001',
		date: '2025-01-10',
		status: 'completado',
		phone: '(551) 234 5678',
		company: 'CFE',
		subtotal: 1500.0,
		commission: 150.0,
		total: 1650.0,
	},
	{
		id: 'PUR-002',
		date: '2025-01-09',
		status: 'pendiente',
		phone: '(558) 765 4321',
		company: 'CEA',
		subtotal: 2300.0,
		commission: 230.0,
		total: 2530.0,
	},
	{
		id: 'PUR-003',
		date: '2025-01-08',
		status: 'completado',
		phone: '(552) 468 1357',
		company: 'Netflix',
		subtotal: 3200.0,
		commission: 320.0,
		total: 3520.0,
	},
	{
		id: 'PUR-004',
		date: '2025-01-07',
		status: 'cancelado',
		phone: '(559) 876 5432',
		company: 'Telcel',
		subtotal: 1800.0,
		commission: 180.0,
		total: 1980.0,
	},
	{
		id: 'PUR-005',
		date: '2025-01-06',
		status: 'completado',
		phone: '(553) 456 7890',
		company: 'Movistar',
		subtotal: 950.0,
		commission: 95.0,
		total: 1045.0,
	},
	{
		id: 'PUR-006',
		date: '2025-01-05',
		status: 'pendiente',
		phone: '(556) 543 2109',
		company: 'AT&T',
		subtotal: 1200.0,
		commission: 120.0,
		total: 1320.0,
	},
	{
		id: 'PUR-007',
		date: '2025-01-04',
		status: 'completado',
		phone: '(557) 890 1234',
		company: 'CFE',
		subtotal: 5600.0,
		commission: 560.0,
		total: 6160.0,
	},
	{
		id: 'PUR-008',
		date: '2025-01-03',
		status: 'completado',
		phone: '(554) 321 8765',
		company: 'Xbox',
		subtotal: 800.0,
		commission: 80.0,
		total: 880.0,
	},
]

const statusColors = {
	completado: 'bg-green-500/10 text-green-700 border-green-500/20',
	pendiente: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
	cancelado: 'bg-red-500/10 text-red-700 border-red-500/20',
}

const statusLabels = {
	completado: 'Completado',
	pendiente: 'Pendiente',
	cancelado: 'Cancelado',
}

export default function HistorialPage() {
	const [searchTerm, setSearchTerm] = useState('')
	const [statusFilter, setStatusFilter] = useState<string>('all')

	const filteredSales = salesData.filter((sale) => {
		const matchesSearch =
			sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
			sale.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
			sale.phone.includes(searchTerm)

		const matchesStatus =
			statusFilter === 'all' || sale.status === statusFilter

		return matchesSearch && matchesStatus
	})

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('es-MX', {
			style: 'currency',
			currency: 'MXN',
		}).format(amount)
	}

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('es-MX', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-slate-900 mb-2">
						Historial de Compras
					</h1>
					<p className="text-slate-600">
						Gestiona y revisa todas las compras realizadas
					</p>
				</div>
				<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex-1 relative">
							<RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
							<Input
								placeholder="Buscar por teléfono, servicio"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10"
							/>
						</div>
						<div className="w-full md:w-48">
							<Select
								value={statusFilter}
								onValueChange={setStatusFilter}
							>
								<SelectTrigger>
									<RiFilterLine className="h-4 w-4 mr-2" />
									<SelectValue placeholder="Filtrar por estatus" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										Todos los estatus
									</SelectItem>
									<SelectItem value="completado">
										Completado
									</SelectItem>
									<SelectItem value="pendiente">
										Pendiente
									</SelectItem>
									<SelectItem value="cancelado">
										Cancelado
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				{filteredSales.length > 0 && (
					<div className="mt-6 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div>
								<p className="text-sm text-slate-600 mb-1">
									Total de compras
								</p>
								<p className="text-2xl font-bold text-slate-900">
									{filteredSales.length}
								</p>
							</div>
							<div>
								<p className="text-sm text-slate-600 mb-1">
									Venta total
								</p>
								<p className="text-2xl font-bold text-slate-900">
									{formatCurrency(
										filteredSales.reduce(
											(sum, sale) => sum + sale.total,
											0,
										),
									)}
								</p>
							</div>
							<div>
								<p className="text-sm text-slate-600 mb-1">
									Saldo restante
								</p>
								<p className="text-2xl font-bold text-primary">
									{formatCurrency(
										filteredSales.reduce(
											(sum, sale) =>
												sum + sale.commission,
											0,
										),
									)}
								</p>
							</div>
						</div>
					</div>
				)}
				<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mt-6">
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow className="bg-slate-50">
									<TableHead className="font-semibold">
										ID
									</TableHead>
									<TableHead className="font-semibold">
										Fecha de la compra
									</TableHead>
									<TableHead className="font-semibold">
										Estatus
									</TableHead>
									<TableHead className="font-semibold">
										No. de celular / No. de servicio
									</TableHead>
									<TableHead className="font-semibold">
										Nombre del servicio
									</TableHead>
									<TableHead className="font-semibold text-right">
										Subtotal
									</TableHead>
									<TableHead className="font-semibold text-right">
										Comisión
									</TableHead>
									<TableHead className="font-semibold text-right">
										Total
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filteredSales.length === 0 ? (
									<TableRow>
										<TableCell
											colSpan={8}
											className="text-center py-8 text-slate-500"
										>
											No se encontraron compras
										</TableCell>
									</TableRow>
								) : (
									filteredSales.map((sale) => (
										<TableRow
											key={sale.id}
											className="hover:bg-slate-50"
										>
											<TableCell className="text-slate-600">
												{sale.id}
											</TableCell>
											<TableCell className="text-slate-600">
												{formatDate(sale.date)}
											</TableCell>
											<TableCell>
												<Badge
													variant="outline"
													className={
														statusColors[
															sale.status as keyof typeof statusColors
														]
													}
												>
													{
														statusLabels[
															sale.status as keyof typeof statusLabels
														]
													}
												</Badge>
											</TableCell>
											<TableCell className="text-slate-600">
												{sale.phone}
											</TableCell>
											<TableCell className="text-slate-900 font-medium">
												{sale.company}
											</TableCell>
											<TableCell className="text-right text-slate-900">
												{formatCurrency(sale.subtotal)}
											</TableCell>
											<TableCell className="text-right text-slate-900 font-medium">
												{formatCurrency(
													sale.commission,
												)}
											</TableCell>
											<TableCell className="text-right text-primary font-semibold">
												{formatCurrency(sale.total)}
											</TableCell>
										</TableRow>
									))
								)}
							</TableBody>
						</Table>
					</div>
				</div>
			</main>
		</div>
	)
}
