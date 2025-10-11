'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Header() {
	const pathname = usePathname()

	const menuItems = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Compras', href: '/historial' },
		{ name: 'Mi Perfil', href: '/perfil' },
	]

	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 h-16 flex items-center justify-center">
				<nav className="flex items-center gap-8">
					{menuItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'text-sm font-medium transition-colors hover:text-primary',
								pathname === item.href
									? 'text-primary'
									: 'text-muted-foreground',
							)}
						>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}

export { Header }
