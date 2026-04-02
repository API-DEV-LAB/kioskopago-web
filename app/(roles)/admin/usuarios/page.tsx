'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	listUsers,
	createUser,
	updateUser,
	deleteUser,
	User,
} from '@/features/admin/api/users'

export default function UsuariosPage() {
	const [users, setUsers] = useState<User[]>([])
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)
	const [search, setSearch] = useState('')
	const [modal, setModal] = useState<'create' | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [form, setForm] = useState({
		name: '',
		fatherLastname: '',
		motherLastname: '',
		email: '',
		password: '',
		phone: '',
		role: 'GROCER' as 'ADMIN' | 'GROCER',
	})

	const load = async () => {
		const r = await listUsers({
			page,
			limit: 15,
			search: search || undefined,
		})
		setUsers(r.items)
		setTotal(r.total)
	}

	useEffect(() => {
		load()
	}, [page, search])

	const handleCreate = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			await createUser(form)
			setModal(null)
			setForm({
				name: '',
				fatherLastname: '',
				motherLastname: '',
				email: '',
				password: '',
				phone: '',
				role: 'GROCER',
			})
			load()
		} catch {
			alert('Error al crear usuario')
		} finally {
			setIsLoading(false)
		}
	}

	const toggleStatus = async (u: User) => {
		const newStatus = u.status === 'ENABLED' ? 'DISABLED' : 'ENABLED'
		try {
			await updateUser(u.id, { status: newStatus })
			load()
		} catch {
			alert('Error al actualizar usuario')
		}
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Usuarios</h1>
				<Button onClick={() => setModal('create')}>
					+ Nuevo usuario
				</Button>
			</div>

			<Input
				placeholder="Buscar..."
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
							<th className="px-4 py-3 text-left">Email</th>
							<th className="px-4 py-3 text-left">Teléfono</th>
							<th className="px-4 py-3 text-left">Rol</th>
							<th className="px-4 py-3 text-left">Estatus</th>
							<th className="px-4 py-3 text-right">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{users.length === 0 ? (
							<tr>
								<td
									colSpan={6}
									className="px-4 py-6 text-center text-muted-foreground"
								>
									Sin usuarios
								</td>
							</tr>
						) : (
							users.map((u) => (
								<tr
									key={u.id}
									className="border-b last:border-0"
								>
									<td className="px-4 py-3 font-medium">
										{u.name} {u.fatherLastname}
									</td>
									<td className="px-4 py-3 text-muted-foreground">
										{u.email}
									</td>
									<td className="px-4 py-3">{u.phone}</td>
									<td className="px-4 py-3">
										<span
											className={`text-xs font-medium px-2 py-1 rounded-full ${u.role === 'ADMIN' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
										>
											{u.role === 'ADMIN'
												? 'ADMINISTRADOR'
												: 'TIENDA'}
										</span>
									</td>
									<td className="px-4 py-3">
										<span
											className={`text-xs font-medium px-2 py-1 rounded-full ${u.status === 'ENABLED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
										>
											{u.status}
										</span>
									</td>
									<td className="px-4 py-3 text-right">
										<Button
											size="sm"
											variant="outline"
											onClick={() => toggleStatus(u)}
										>
											{u.status === 'ENABLED'
												? 'Deshabilitar'
												: 'Habilitar'}
										</Button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			<div className="flex items-center justify-between text-sm text-muted-foreground">
				<span>{total} usuarios en total</span>
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
						disabled={users.length < 15}
						onClick={() => setPage((p) => p + 1)}
					>
						Siguiente
					</Button>
				</div>
			</div>

			{modal === 'create' && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<Card className="w-full max-w-md max-h-screen overflow-y-auto">
						<CardHeader>
							<CardTitle>Nuevo usuario</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleCreate} className="space-y-4">
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
									<Label>Apellido paterno</Label>
									<Input
										value={form.fatherLastname}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												fatherLastname: e.target.value,
											}))
										}
										required
									/>
								</div>
								<div>
									<Label>Apellido materno</Label>
									<Input
										value={form.motherLastname}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												motherLastname: e.target.value,
											}))
										}
										required
									/>
								</div>
								<div>
									<Label>Email</Label>
									<Input
										type="email"
										value={form.email}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												email: e.target.value,
											}))
										}
										required
									/>
								</div>
								<div>
									<Label>Contraseña</Label>
									<Input
										type="password"
										value={form.password}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												password: e.target.value,
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
										required
									/>
								</div>
								<div>
									<Label>Rol</Label>
									<select
										className="w-full border rounded-md px-3 py-2 text-sm mt-1"
										value={form.role}
										onChange={(e) =>
											setForm((f) => ({
												...f,
												role: e.target.value as
													| 'ADMIN'
													| 'GROCER',
											}))
										}
									>
										<option value="GROCER">
											GROCER (Tienda)
										</option>
										<option value="ADMIN">ADMIN</option>
									</select>
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
										{isLoading ? 'Creando...' : 'Crear'}
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
