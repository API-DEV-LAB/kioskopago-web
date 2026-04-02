import axios, { AxiosError } from 'axios'
import { getAccessToken, clearAuthTokens } from '@/shared/utils/cookies'
import { ROUTES_APP } from '@/shared/utils/constants'

const API = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 30000, // 30s — Mantarys puede tardar hasta 20s
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

API.interceptors.request.use(
	(config) => {
		if (typeof window !== 'undefined') {
			const token = getAccessToken()
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)

API.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (error.response?.status === 401) {
			clearAuthTokens()
			if (typeof window !== 'undefined') {
				const currentPath = window.location.pathname
				if (currentPath !== ROUTES_APP.LOGIN.path) {
					sessionStorage.setItem('redirectAfterLogin', currentPath)
				}
				window.location.href = ROUTES_APP.LOGIN.path
			}
		}

		if (!error.response) {
			console.error(
				'🌐 Error de red - No se pudo conectar con el servidor',
			)
		}
		return Promise.reject(error)
	},
)

export default API
