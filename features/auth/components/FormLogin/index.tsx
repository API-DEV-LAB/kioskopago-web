'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
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
	const [validationError, setValidationError] = useState<string | null>(null)

	const { mutate, isPending, isError } = useMutation({
		mutationFn: requestOtp,
		onSuccess: () => router.push(ROUTES_APP.VERIFICATION.path),
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setValidationError(null)
		const phoneError = validatePhone(phone)
		if (phoneError) {
			setValidationError(phoneError)
			return
		}
		mutate({ phone })
	}

	const error =
		validationError ??
		(isError ? 'No se pudo enviar el código. Intenta de nuevo.' : null)

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
				disabled={isPending}
			>
				{isPending ? 'Enviando código...' : 'Continuar'}
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

export { FormLogin }
