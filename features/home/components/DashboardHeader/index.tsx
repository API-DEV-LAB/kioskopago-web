import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'
import { RiStore3Line } from '@remixicon/react'

export default function DashboardHeader() {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Link href={ROUTES_APP.DASHBOARD.path} className="flex items-center gap-3">
						<div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
							<RiStore3Line className="w-5 h-5" />
						</div>
						<div>
							<h1 className="font-semibold text-sm md:text-base">
								Mi tienda.com
							</h1>
						</div>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-1">
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.DASHBOARD.path}
							className="flex items-center gap-2"
						>
							Inicio
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.HISTORIAL.path}
							className="flex items-center gap-2"
						>
							Historial
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href={ROUTES_APP.PROFILE.path}
							className="flex items-center gap-2"
						>
							Perfil
						</Link>
					</Button>
				</nav>
			</div>
		</header>
	)
}

export { DashboardHeader }
