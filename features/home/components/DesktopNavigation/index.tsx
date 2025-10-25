'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ROUTES_APP, MENU_LOGGED_IN } from '@/shared/utils/constants'
import { Button } from '@/components/ui/button'

export default function DesktopNavigation() {
	const pathname = usePathname()
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

	useEffect(() => {
		const allCookies = document.cookie
		const hasToken = allCookies.includes('token=')
		if (hasToken) {
			setIsLoggedIn(false)
		} else {
			setIsLoggedIn(true)
		}
	}, [])

	if (isLoggedIn) {
		return (
			<div className='flex gap-2'>
				<Button variant="ghost" asChild>
					<Link href={ROUTES_APP.REGISTER.path}>
						{ROUTES_APP.REGISTER.name}
					</Link>
				</Button>
				<Button asChild>
					<Link href={ROUTES_APP.LOGIN.path}>
						{ROUTES_APP.LOGIN.name}
					</Link>
				</Button>
			</div>
		)
	} else {
		return (
			<div className='flex'>
				{MENU_LOGGED_IN.map((item) => (
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
			</div>
		)
	}
}

export { DesktopNavigation }