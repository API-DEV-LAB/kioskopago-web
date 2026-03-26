'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ROUTES_APP } from '@/shared/utils/constants'
import { adminLogin } from '@/features/auth/api/login'
import { setTokens } from '@/shared/utils/auth'

export default function FormAdminLogin() {
	const router = useRouter()
	const [identifier, setIdentifier] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		setIsLoading(true)
		try {
			const response = await adminLogin({ identifier, password })
			setTokens(response.accessToken, response.refreshToken)
			router.push(ROUTES_APP.ADMIN_DASHBOARD.path)
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
					required
					value={identifier}
					onChange={(e) => setIdentifier(e.target.value)}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Contraseña</Label>
				<Input
					id="password"
					type="password"
					placeholder="••••••••"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			{error && <p className="text-sm text-destructive">{error}</p>}
			<Button
				type="submit"
				className="w-full"
				size="lg"
				disabled={isLoading}
			>
				{isLoading ? 'Ingresando...' : 'Ingresar'}
			</Button>
			<p className="text-center text-sm text-muted-foreground mt-4">
				¿Eres una tienda?{' '}
				<a
					href={ROUTES_APP.LOGIN.path}
					className="text-primary hover:underline font-medium"
				>
					Inicia sesión aquí
				</a>
			</p>
		</form>
	)
}
