'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function Header() {
	const pathname = usePathname()
	const menuItems = [
		{ name: ROUTES_APP.HOME.name, href: ROUTES_APP.HOME.path },
		{ name: ROUTES_APP.HISTORIAL.name, href: ROUTES_APP.HISTORIAL.path },
		{ name: ROUTES_APP.PROFILE.name, href: ROUTES_APP.PROFILE.path },
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
								'flex items-center justify-center px-6 text-base font-medium transition-colors h-16 hover:text-primary',
								pathname === item.href
									? 'text-primary font-semibold'
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
