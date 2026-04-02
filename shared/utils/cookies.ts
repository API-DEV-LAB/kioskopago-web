import Cookies from 'js-cookie'

/**
 * Utilidades para manejar cookies de autenticación
 */

// Constantes para los nombres de las cookies
export const COOKIE_NAMES = {
	ACCESS_TOKEN: 'access_token',
	REFRESH_TOKEN: 'refresh_token',
	USER_ROLE: 'user_role',
} as const

// Opciones por defecto para las cookies
const COOKIE_OPTIONS = {
	secure: process.env.NODE_ENV === 'production',
	sameSite: 'strict' as const,
	path: '/',
}

/**
 * Guarda el access token en una cookie
 * @param token - El access token a guardar
 * @param expires - Días hasta la expiración (por defecto 1 día)
 */
export const setAccessToken = (token: string, expires: number = 1): void => {
	Cookies.set(COOKIE_NAMES.ACCESS_TOKEN, token, {
		...COOKIE_OPTIONS,
		expires,
	})
}

/**
 * Guarda el refresh token en una cookie
 * @param token - El refresh token a guardar
 * @param expires - Días hasta la expiración (por defecto 7 días)
 */
export const setRefreshToken = (token: string, expires: number = 7): void => {
	Cookies.set(COOKIE_NAMES.REFRESH_TOKEN, token, {
		...COOKIE_OPTIONS,
		expires,
	})
}

/**
 * Obtiene el access token de las cookies
 * @returns El access token o undefined si no existe
 */
export const getAccessToken = (): string | undefined => {
	return Cookies.get(COOKIE_NAMES.ACCESS_TOKEN)
}

/**
 * Obtiene el refresh token de las cookies
 * @returns El refresh token o undefined si no existe
 */
export const getRefreshToken = (): string | undefined => {
	return Cookies.get(COOKIE_NAMES.REFRESH_TOKEN)
}

/**
 * Elimina el access token de las cookies
 */
export const removeAccessToken = (): void => {
	Cookies.remove(COOKIE_NAMES.ACCESS_TOKEN, { path: '/' })
}

/**
 * Elimina el refresh token de las cookies
 */
export const removeRefreshToken = (): void => {
	Cookies.remove(COOKIE_NAMES.REFRESH_TOKEN, { path: '/' })
}

/**
 * Elimina todos los tokens de autenticación de las cookies
 */
export const clearAuthTokens = (): void => {
	removeAccessToken()
	removeRefreshToken()
	removeUserRole()
}

/**
 * Verifica si existe un access token válido
 * @returns true si existe el token
 */
export const hasAccessToken = (): boolean => {
	return !!getAccessToken()
}

/**
 * Verifica si existe un refresh token válido
 * @returns true si existe el token
 */
export const hasRefreshToken = (): boolean => {
	return !!getRefreshToken()
}

/**
 * Guarda el rol del usuario en una cookie
 * @param role - El rol del usuario
 * @param expires - Días hasta la expiración (por defecto 1 día)
 */
export const setUserRole = (role: string, expires: number = 1): void => {
	Cookies.set(COOKIE_NAMES.USER_ROLE, role, {
		...COOKIE_OPTIONS,
		expires,
	})
}

/**
 * Obtiene el rol del usuario de las cookies
 * @returns El rol del usuario o undefined si no existe
 */
export const getUserRole = (): string | undefined => {
	return Cookies.get(COOKIE_NAMES.USER_ROLE)
}

/**
 * Elimina el rol del usuario de las cookies
 */
export const removeUserRole = (): void => {
	Cookies.remove(COOKIE_NAMES.USER_ROLE, { path: '/' })
}
