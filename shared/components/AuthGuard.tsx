'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getToken, getUserRole, isTokenExpired } from '@/shared/utils/auth'
import { PUBLIC_ROUTES, ROUTES_APP } from '@/shared/utils/constants'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isPublic = PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith(r))
    if (isPublic) return

    const token = getToken()
    if (!token || isTokenExpired()) {
      router.replace(ROUTES_APP.LOGIN.path)
      return
    }

    const role = getUserRole()
    const isAdminRoute = pathname.startsWith('/admin')
    const isDashboardRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/historial') || pathname.startsWith('/mi-perfil')

    if (isAdminRoute && role !== 'ADMIN') {
      router.replace(ROUTES_APP.DASHBOARD.path)
    } else if (isDashboardRoute && role !== 'GROCER') {
      router.replace(ROUTES_APP.ADMIN_DASHBOARD.path)
    }
  }, [pathname, router])

  return <>{children}</>
}
