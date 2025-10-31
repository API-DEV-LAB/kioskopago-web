import axios, { AxiosError } from 'axios'

const API = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'App-Version': 'v1.0.0',
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
				window.location.href = '/'
			}
		}
		console.error(err.response?.data?.message || err.message)
		return Promise.reject(err)
	},
)

export default API
