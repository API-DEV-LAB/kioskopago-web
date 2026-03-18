'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { adminLogin } from '@/features/auth/api/login'
import { useAuth } from '@/shared/hooks/useAuth'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function FormAdminLogin() {
  const { login } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!identifier || !password) { setError('Completa todos los campos.'); return }
    setIsLoading(true)
    try {
      const response = await adminLogin({ identifier, password })
      if (response.user.role !== 'ADMIN') {
        setError('Esta cuenta no tiene permisos de administrador.')
        return
      }
      login(response.accessToken, response.refreshToken)
    } catch {
      setError('Credenciales incorrectas. Intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="identifier">Correo electrónico</Label>
        <Input
          id="identifier"
          type="email"
          placeholder="admin@kioskopago.com"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
        {isLoading ? 'Iniciando sesión...' : 'Entrar'}
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-4">
        <a href={ROUTES_APP.LOGIN.path} className="text-primary hover:underline">
          Acceso para tiendas
        </a>
      </p>
    </form>
  )
}
