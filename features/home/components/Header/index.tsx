import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function Header() {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Link href={ROUTES_APP.HOME.path}>
						<span className="font-bold text-xl">Kioskopago</span>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-6">
					<a
						href="#caracteristicas"
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Características
					</a>
					<a
						href="#servicios"
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Servicios
					</a>
					<a
						href="#beneficios"
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Beneficios
					</a>
				</nav>
				<Button asChild size="sm" className="rounded-full">
					<Link href={ROUTES_APP.REGISTER.path}>
						Registrar mi tienda
					</Link>
				</Button>
			</div>
		</header>
	)
}

export { Header }
