'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
	RiHome2Line,
	RiBarChart2Line,
	RiAccountCircleLine,
} from '@remixicon/react'
import { ROUTES_APP } from '@/shared/utils/constants'

const navItems = [
	{
		href: ROUTES_APP.DASHBOARD.path,
		icon: RiHome2Line,
		label: ROUTES_APP.DASHBOARD.name,
	},
	{
		href: ROUTES_APP.HISTORIAL.path,
		icon: RiBarChart2Line,
		label: ROUTES_APP.HISTORIAL.name,
	},
	{
		href: ROUTES_APP.PROFILE.path,
		icon: RiAccountCircleLine,
		label: ROUTES_APP.PROFILE.name,
	},
]

export default function MobileNavigation() {
	const pathname = usePathname()
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden">
			<div className="flex items-center justify-around py-0">
				{navItems.map((item) => {
					const isActive = pathname === item.href
					return (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors',
								isActive
									? 'text-foreground'
									: 'text-muted-foreground',
							)}
						>
							<item.icon className="w-5 h-5" />
							<span className="text-xs font-medium">
								{item.label}
							</span>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}

export { MobileNavigation }
