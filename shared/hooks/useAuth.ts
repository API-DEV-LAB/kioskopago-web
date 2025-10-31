import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES_APP } from '@/shared/utils/constants'

export const useAuth = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = () => {
        if (typeof window === 'undefined') return false
        try {
            const token = localStorage.getItem('token')
            setIsAuthenticated(!!token)
        } catch (error) {
            console.error('Error accessing localStorage:', error)
            setIsAuthenticated(false)
        } finally {
            setIsLoading(false)
        }
    }

    const login = (token: string) => {
        try {
            localStorage.setItem('token', token)
            setIsAuthenticated(true)
            router.push(ROUTES_APP.DASHBOARD.path)
        } catch (error) {
            console.error('Error storing token:', error)
        }
    }

    const logout = () => {
        try {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
            router.push(ROUTES_APP.HOME.path)
        } catch (error) {
            console.error('Error removing token:', error)
        }
    }

    return {
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuth
    }
}