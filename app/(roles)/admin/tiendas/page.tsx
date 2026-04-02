'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	listStores,
	createStore,
	updateStore,
	topupStore,
	getStoreBalance,
	Store,
} from '@/features/admin/api/stores'

type ModalType = 'create' | 'topup' | 'edit' | null

export default function TiendasPage() {
	const [stores, setStores] = useState<Store[]>([])
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)
	const [search, setSearch] = useState('')
	const [modal, setModal] = useState<ModalType>(null)
	const [selectedStore, setSelectedStore] = useState<Store | null>(null)
	const [balances, setBalances] = useState<Record<string, number>>({})
	const [isLoading, setIsLoading] = useState(false)

	// Create form
	const [form, setForm] = useState({
		name: '',
		address: '',
		phone: '',
		bonusPercentage: '',
	})
	// Topup form
	const [topupAmount, setTopupAmount] = useState('')
	const [topupRef, setTopupRef] = useState('')

	const load = async () => {
		const r = await listStores({
			page,
			limit: 10,
			search: search || undefined,
		})
		setStores(r.items)
		setTotal(r.total)
		// fetch balances
		r.items.forEach((s) => {
			getStoreBalance(s.id)
				.then((b) =>
					setBalances((prev) => ({
						...prev,
						[s.id]: b.currentBalance,
					})),
				)
				.catch(() => {})
		})
	}

	useEffect(() => {
		load()
	}, [page, search])

	const handleCreate = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			await createStore({
				name: form.name,
				address: form.address,
				phone: form.phone || undefined,
				bonusPercentage: form.bonusPercentage
					? Number(form.bonusPercentage)
					: undefined,
			})
			setModal(null)
			setForm({ name: '', address: '', phone: '', bonusPercentage: '' })
			load()
		} catch {
			alert('Error al crear tienda')
		} finally {
			setIsLoading(false)
		}
	}

	const handleTopup = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!selectedStore) return
		setIsLoading(true)
		try {
			await topupStore({
				storeId: selectedStore.id,
				amount: Number(topupAmount),
				reference: topupRef || undefined,
			})
			setModal(null)
			setTopupAmount('')
			setTopupRef('')
			load()
		} catch {
			alert('Error al cargar saldo')
		} finally {
			setIsLoading(false)
		}
	}

	const handleEdit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!selectedStore) return
		setIsLoading(true)
		try {
			await updateStore(selectedStore.id, {
				name: form.name,
				address: form.address,
				phone: form.phone || undefined,
				bonusPercentage: form.bonusPercentage
					? Number(form.bonusPercentage)
					: undefined,
			})
			setModal(null)
			load()
		} catch {
			alert('Error al actualizar tienda')
		} finally {
			setIsLoading(false)
		}
	}

	const openEdit = (s: Store) => {
		setSelectedStore(s)
		setForm({
			name: s.name,
			address: s.address,
			phone: s.phone || '',
			bonusPercentage: String(s.bonusPercentage),
		})
		setModal('edit')
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Tiendas</h1>
				<Button onClick={() => setModal('create')}>
					+ Nueva tienda
				</Button>
			</div>

			<Input
				placeholder="Buscar tienda..."
				value={search}
				onChange={(e) => {
					setSearch(e.target.value)
					setPage(1)
				}}
				className="max-w-sm"
			/>

			<div className="rounded-md border">
				<table className="w-full text-sm">
					<thead className="border-b bg-muted/50">
						<tr>
							<th className="px-4 py-3 text-left">Nombre</th>
							<th className="px-4 py-3 text-left">Dirección</th>
							<th className="px-4 py-3 text-right">Saldo</th>
							<th className="px-4 py-3 text-right">Bonus %</th>
							<th className="px-4 py-3 text-right">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{stores.length === 0 ? (
							<tr>
								<td
									colSpan={5}
									className="px-4 py-6 text-center text-muted-foreground"
								>
									Sin tiendas
								</td>
							</tr>
						) : (
							stores.map((s) => (
								<tr
									key={s.id}
									className="border-b last:border-0"
								>
									<td className="px-4 py-3 font-medium">
										{s.name}
									</td>
									<td className="px-4 py-3 text-muted-foreground">
										{s.address}
									</td>
									<td className="px-4 py-3 text-right">
										${s.balance.currentBalance ?? 0}
									</td>
									<td className="px-4 py-3 text-right">
										{s.bonusPercentage}%
									</td>
									<td className="px-4 py-3 text-right space-x-2">
										<Button
											size="sm"
											variant="outline"
											onClick={() => openEdit(s)}
										>
											Editar
										</Button>
										<Button
											size="sm"
											onClick={() => {
												setSelectedStore(s)
												setModal('topup')
											}}
										>
											Cargar saldo
										</Button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-between text-sm text-muted-foreground">
				<span>{total} tiendas en total</span>
				<div className="flex gap-2">
					<Button
						size="sm"
						variant="outline"
						disabled={page === 1}
						onClick={() => setPage((p) => p - 1)}
					>
						Anterior
					</Button>
					<Button
						size="sm"
						variant="outline"
						disabled={stores.length < 10}
						onClick={() => setPage((p) => p + 1)}
					>
						Siguiente
					</Button>
				</div>
			</div>

			{/* Create/Edit modal */}
			{(modal === 'create' || modal === 'edit') && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<Card className="w-full max-w-md">
						<CardHeader>
							<CardTitle>
								{modal === 'create'
									? 'Nueva tienda'
									: 'Editar tienda'}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form
								onSubmit={
									modal === 'create'
										? handleCreate
										: handleEdit
								}
								className="space-y-4"
							>
								<div>
									<Label>Nombre</Label>
									<Input
										value={form.name}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												name: e.target.value,
											}))
										}
										required
									/>
								</div>
								<div>
									<Label>Dirección</Label>
									<Input
										value={form.address}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												address: e.target.value,
											}))
										}
										required
									/>
								</div>
								<div>
									<Label>Teléfono</Label>
									<Input
										value={form.phone}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												phone: e.target.value,
											}))
										}
									/>
								</div>
								<div>
									<Label>Bonus % (0-100)</Label>
									<Input
										type="number"
										min="0"
										max="100"
										step="0.1"
										value={form.bonusPercentage}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												bonusPercentage: e.target.value,
											}))
										}
									/>
								</div>
								<div className="flex gap-2 justify-end">
									<Button
										type="button"
										variant="outline"
										onClick={() => setModal(null)}
									>
										Cancelar
									</Button>
									<Button type="submit" disabled={isLoading}>
										{isLoading ? 'Guardando...' : 'Guardar'}
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</div>
			)}

			{/* Topup modal */}
			{modal === 'topup' && selectedStore && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<Card className="w-full max-w-sm">
						<CardHeader>
							<CardTitle>
								Cargar saldo — {selectedStore.name}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleTopup} className="space-y-4">
								<div>
									<Label>Monto ($)</Label>
									<Input
										type="number"
										min="1"
										step="0.01"
										value={topupAmount}
										onChange={(e) =>
											setTopupAmount(e.target.value)
										}
										required
									/>
								</div>
								<div>
									<Label>Referencia</Label>
									<Input
										value={topupRef}
										onChange={(e) =>
											setTopupRef(e.target.value)
										}
										placeholder="Opcional"
									/>
								</div>
								<div className="flex gap-2 justify-end">
									<Button
										type="button"
										variant="outline"
										onClick={() => setModal(null)}
									>
										Cancelar
									</Button>
									<Button type="submit" disabled={isLoading}>
										{isLoading
											? 'Cargando...'
											: 'Cargar saldo'}
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	)
}
