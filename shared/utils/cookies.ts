'use client'

const COOKIE_ACCESS_TOKEN = 'access_token'
const COOKIE_REFRESH_TOKEN = 'refresh_token'
const COOKIE_USER_ROLE = 'user_role'

function setCookie(name: string, value: string, days = 7): void {
	if (typeof document === 'undefined') return
	const expires = new Date()
	expires.setDate(expires.getDate() + days)
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

function getCookieValue(name: string): string | null {
	if (typeof document === 'undefined') return null
	const match = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${name}=`))
	if (!match) return null
	return decodeURIComponent(match.split('=')[1])
}

function deleteCookie(name: string): void {
	if (typeof document === 'undefined') return
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`
}

export function setCookies(
	accessToken: string,
	refreshToken: string,
	role: 'ADMIN' | 'GROCER',
): void {
	setCookie(COOKIE_ACCESS_TOKEN, accessToken)
	setCookie(COOKIE_REFRESH_TOKEN, refreshToken)
	setCookie(COOKIE_USER_ROLE, role)
}

export function getCookie(
	name: 'access_token' | 'refresh_token' | 'user_role',
): string | null {
	return getCookieValue(name)
}

export function clearCookies(): void {
	deleteCookie(COOKIE_ACCESS_TOKEN)
	deleteCookie(COOKIE_REFRESH_TOKEN)
	deleteCookie(COOKIE_USER_ROLE)
}
