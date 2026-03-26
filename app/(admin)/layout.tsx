'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ROUTES_APP } from '@/shared/utils/constants'
import { getUserRole, clearTokens } from '@/shared/utils/auth'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const router = useRouter()

	useEffect(() => {
		const role = getUserRole()
		if (!role) {
			router.replace(ROUTES_APP.ADMIN_LOGIN.path)
		} else if (role !== 'ADMIN') {
			router.replace(ROUTES_APP.DASHBOARD.path)
		}
	}, [router])

	const handleLogout = () => {
		clearTokens()
		router.push(ROUTES_APP.ADMIN_LOGIN.path)
	}

	return (
		<div className="min-h-screen bg-background flex">
			{/* Sidebar */}
			<aside className="w-64 border-r bg-card flex flex-col">
				<div className="h-16 flex items-center px-6 border-b">
					<span className="font-bold text-xl">Kioskopago</span>
					<span className="ml-2 text-xs bg-primary text-primary-foreground rounded px-1">
						Admin
					</span>
				</div>
				<nav className="flex-1 p-4 space-y-1">
					<Link
						href={ROUTES_APP.ADMIN_DASHBOARD.path}
						className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
					>
						Dashboard
					</Link>
					<Link
						href={ROUTES_APP.ADMIN_TIENDAS.path}
						className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
					>
						Tiendas
					</Link>
					<Link
						href={ROUTES_APP.ADMIN_USUARIOS.path}
						className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
					>
						Usuarios
					</Link>
					<Link
						href={ROUTES_APP.ADMIN_TRANSACCIONES.path}
						className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
					>
						Transacciones
					</Link>
				</nav>
				<div className="p-4 border-t">
					<button
						onClick={handleLogout}
						className="w-full text-left px-3 py-2 rounded-md text-sm text-destructive hover:bg-accent transition-colors"
					>
						Cerrar sesión
					</button>
				</div>
			</aside>

			{/* Main content */}
			<main className="flex-1 flex flex-col overflow-auto">
				<div className="p-8">{children}</div>
			</main>
		</div>
	)
}
