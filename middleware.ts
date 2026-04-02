import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PUBLIC_ROUTES, AUTH_ROUTES } from '@/shared/utils/constants'
import { COOKIE_NAMES } from '@/shared/utils/cookies'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const token = request.cookies.get(COOKIE_NAMES.ACCESS_TOKEN)
	const userRole = request.cookies.get(COOKIE_NAMES.USER_ROLE)?.value

	// Rutas públicas — permitir sin verificar
	const isPublicRoute = PUBLIC_ROUTES.some((route) =>
		pathname.startsWith(route),
	)
	if (isPublicRoute) return NextResponse.next()

	// Rutas protegidas — verificar sesión y rol
	const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route))
	if (isAuthRoute) {
		// Sin token → redirigir a login
		if (!token || !userRole) {
			return NextResponse.redirect(new URL('/inicia-sesion', request.url))
		}

		// GROCER intentando acceder a /admin → redirigir a /tienda
		if (userRole === 'GROCER' && pathname.startsWith('/admin')) {
			return NextResponse.redirect(new URL('/tienda', request.url))
		}

		// ADMIN intentando acceder a /tienda → redirigir a /admin
		if (userRole === 'ADMIN' && pathname.startsWith('/tienda')) {
			return NextResponse.redirect(new URL('/admin', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|icons|og-image.png).*)',
	],
}
