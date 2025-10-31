'use client'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/shared/hooks/useAuth'
import {
	PUBLIC_ROUTES,
	AUTH_ROUTES,
	ROUTES_APP,
} from '@/shared/utils/constants'

interface AuthGuardProps {
	children: React.ReactNode
}

const Loading = () => (
	<div className="min-h-screen flex items-center justify-center">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
	</div>
)

export const AuthGuard = ({ children }: AuthGuardProps) => {
	const { isAuthenticated, isLoading } = useAuth()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		if (!isLoading) {
			if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
				router.push(ROUTES_APP.HOME.path)
			}
			if (isAuthenticated && AUTH_ROUTES.includes(pathname)) {
				router.push(ROUTES_APP.DASHBOARD.path)
			}
		}
	}, [isAuthenticated, isLoading, pathname, router])

	if (isLoading) {
		return <Loading />
	}

	if (PUBLIC_ROUTES.includes(pathname)) {
		return <>{children}</>
	}

	if (isAuthenticated) {
		return <>{children}</>
	}

	return null
}
