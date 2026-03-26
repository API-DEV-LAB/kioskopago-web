'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES_APP } from '@/shared/utils/constants'
import { clearTokens, setTokens, getUserRole, isTokenExpired } from '@/shared/utils/auth'

export const useAuth = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState<'ADMIN' | 'GROCER' | null>(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    if (typeof window === 'undefined') return
    try {
      if (isTokenExpired()) {
        clearTokens()
        setIsAuthenticated(false)
        setRole(null)
      } else {
        const userRole = getUserRole()
        setIsAuthenticated(true)
        setRole(userRole)
      }
    } catch {
      setIsAuthenticated(false)
      setRole(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = (accessToken: string, refreshToken: string) => {
    setTokens(accessToken, refreshToken)
    const userRole = getUserRole()
    setIsAuthenticated(true)
    setRole(userRole)
    if (userRole === 'ADMIN') {
      router.push(ROUTES_APP.ADMIN_DASHBOARD.path)
    } else {
      router.push(ROUTES_APP.DASHBOARD.path)
    }
  }

  const logout = () => {
    clearTokens()
    setIsAuthenticated(false)
    setRole(null)
    router.push(ROUTES_APP.HOME.path)
  }

  return { isAuthenticated, isLoading, role, login, logout, checkAuth }
}
