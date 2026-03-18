'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { getUserRole, isTokenExpired, clearTokens } from '@/shared/utils/auth'
import { ROUTES_APP } from '@/shared/utils/constants'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/tiendas', label: 'Tiendas' },
  { href: '/admin/usuarios', label: 'Usuarios' },
  { href: '/admin/transacciones', label: 'Transacciones' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isTokenExpired()) {
      clearTokens()
      router.push(ROUTES_APP.ADMIN_LOGIN.path)
      return
    }
    if (getUserRole() !== 'ADMIN') {
      router.push(ROUTES_APP.ADMIN_LOGIN.path)
    }
  }, [router])

  const handleLogout = () => {
    clearTokens()
    router.push(ROUTES_APP.ADMIN_LOGIN.path)
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col">
        <div className="h-16 border-b flex items-center px-6">
          <span className="font-bold text-lg">Kioskopago</span>
          <span className="ml-2 text-xs text-muted-foreground">Admin</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  )
}
