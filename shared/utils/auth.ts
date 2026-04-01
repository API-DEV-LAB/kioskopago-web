import { JwtPayload } from '@/features/auth/types/types'
import { setCookies, getCookie, clearCookies } from '@/shared/utils/cookies'

export function getToken(): string | null {
	return getCookie('access_token')
}

export function setTokens(
	accessToken: string,
	refreshToken: string,
	role: 'ADMIN' | 'GROCER',
): void {
	setCookies(accessToken, refreshToken, role)
}

export function clearTokens(): void {
	clearCookies()
}

export function parseJwt(token: string): JwtPayload | null {
	try {
		const base64 = token
			.split('.')[1]
			.replace(/-/g, '+')
			.replace(/_/g, '/')
		return JSON.parse(atob(base64)) as JwtPayload
	} catch {
		return null
	}
}

export function getUserRole(): 'ADMIN' | 'GROCER' | null {
	const role = getCookie('user_role')
	if (role === 'ADMIN' || role === 'GROCER') return role
	return null
}

export function isTokenExpired(): boolean {
	const token = getToken()
	if (!token) return true
	const payload = parseJwt(token)
	if (!payload) return true
	return Date.now() >= payload.exp * 1000
}
