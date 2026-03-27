import axios, { AxiosError } from 'axios'

const API = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 30000, // 30s — Mantarys puede tardar hasta 20s
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

API.interceptors.request.use((config) => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('token')
		if (token) config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

API.interceptors.response.use(
	(res) => res,
	(error) => {
		const err = error as AxiosError<{ message?: string }>
		if (err.response?.status === 401) {
			if (typeof window !== 'undefined') {
				localStorage.removeItem('token')
				localStorage.removeItem('refreshToken')
				// window.location.href = '/'
			}
		}
		return Promise.reject(err)
	},
)

export default API
