'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	PHONE_MAX,
	PHONE_PLACEHOLDER,
	ROUTES_APP,
	DEV_OTP_HINT,
} from '@/shared/utils/constants'
import { validatePhone } from '@/shared/utils/validations'
import { useAuthLoginStore } from '@/features/auth/store/login'
import { requestOtp } from '@/features/auth/api/otp'

export default function FormLogin() {
	const router = useRouter()
	const { phone, setPhone } = useAuthLoginStore()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		const validationError = validatePhone(phone)
		if (validationError) {
			setError(validationError)
			return
		}
		setIsLoading(true)
		try {
			await requestOtp({ phone })
			router.push(ROUTES_APP.VERIFICATION.path)
		} catch {
			setError('No se pudo enviar el código. Intenta de nuevo.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-2">
				<Label htmlFor="phoneNumber">Número de celular</Label>
				<Input
					id="phoneNumber"
					type="tel"
					placeholder={PHONE_PLACEHOLDER}
					required
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					maxLength={PHONE_MAX}
				/>
				{error && <p className="text-sm text-destructive">{error}</p>}
			</div>

			{DEV_OTP_HINT && (
				<p className="text-xs text-center text-muted-foreground bg-muted rounded p-2">
					🛠 Modo desarrollo — el código siempre es{' '}
					<strong>{DEV_OTP_HINT}</strong>
				</p>
			)}

			<Button
				type="submit"
				className="w-full"
				size="lg"
				disabled={isLoading}
			>
				{isLoading ? 'Enviando código...' : 'Continuar'}
			</Button>

			<p className="text-center text-sm text-muted-foreground mt-4">
				¿No tienes una cuenta?{' '}
				<a
					href={ROUTES_APP.REGISTER.path}
					className="text-primary hover:underline font-medium"
				>
					Regístrate aquí
				</a>
			</p>
		</form>
	)
}
