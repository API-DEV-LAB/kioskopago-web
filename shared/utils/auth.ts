import { JwtPayload } from '@/features/auth/types/types'

export function getToken(): string | null {
	if (typeof window === 'undefined') return null
	return localStorage.getItem('token')
}

export function setTokens(accessToken: string, refreshToken: string): void {
	localStorage.setItem('token', accessToken)
	localStorage.setItem('refreshToken', refreshToken)
}

export function clearTokens(): void {
	localStorage.removeItem('token')
	localStorage.removeItem('refreshToken')
}

export function parseJwt(token: string): JwtPayload | null {
	try {
		const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
		return JSON.parse(atob(base64)) as JwtPayload
	} catch {
		return null
	}
}

export function getUserRole(): 'ADMIN' | 'GROCER' | null {
	const token = getToken()
	if (!token) return null
	const payload = parseJwt(token)
	return payload?.role ?? null
}

export function isTokenExpired(): boolean {
	const token = getToken()
	if (!token) return true
	const payload = parseJwt(token)
	if (!payload) return true
	return Date.now() >= payload.exp * 1000
}
