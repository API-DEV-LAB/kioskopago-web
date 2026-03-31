import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'
import { RiStore3Line } from '@remixicon/react'

export default function AdminHeader() {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Link
						href={ROUTES_APP.ADMIN_DASHBOARD.path}
						className="flex items-center gap-3"
					>
						<div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
							<RiStore3Line className="w-5 h-5" />
						</div>
						<div>
							<h1 className="font-semibold text-sm md:text-base">
								Dashboard
							</h1>
						</div>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-1">
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.ADMIN_DASHBOARD.path}
							className="flex items-center gap-2"
						>
							Inicio
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.ADMIN_TIENDAS.path}
							className="flex items-center gap-2"
						>
							Tiendas
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.ADMIN_USUARIOS.path}
							className="flex items-center gap-2"
						>
							Usuarios
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.ADMIN_TRANSACCIONES.path}
							className="flex items-center gap-2"
						>
							Transacciones
						</Link>
					</Button>
				</nav>
			</div>
		</header>
	)
}

export { AdminHeader }
