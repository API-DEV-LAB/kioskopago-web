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
} from '@/shared/utils/constants'
import { AuthLoginPost } from '@/features/auth/api/login'
import { validatePhone } from '@/shared/utils/validations'
import { useAuthLoginStore } from '@/features/auth/store/login'

export default function FormLogin() {
	const router = useRouter()
	const { phone, setPhone } = useAuthLoginStore()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const error = validatePhone(phone)
		if (error) {
			alert(error)
			return
		}

		setIsLoading(true)
		try {
			const response = await AuthLoginPost(phone)
			// API returns { message: 'OTP sent', expiresIn: 600 } on success
			if (response?.message) {
				router.push(ROUTES_APP.VERIFICATION.path)
			}
		} catch (error) {
			console.error('AuthLoginPost form::', error)
			alert('No se pudo enviar el código. Verifica tu número e intenta de nuevo.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-2">
					<Label
						htmlFor="phoneNumber"
						className="flex items-center gap-2"
					>
						Número de celular
					</Label>
					<Input
						id="phoneNumber"
						type="tel"
						placeholder={PHONE_PLACEHOLDER}
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						maxLength={PHONE_MAX}
					/>
				</div>
				<Button
					type="submit"
					className="w-full"
					size="lg"
					disabled={isLoading}
				>
					{isLoading ? 'Enviando código...' : 'Continuar'}
				</Button>
				<p className="text-center text-sm text-muted-foreground mx-0 my-0 mt-4">
					¿No tienes una cuenta?{' '}
					<a
						href={ROUTES_APP.REGISTER.path}
						className="text-primary hover:underline font-medium"
					>
						Regístrate aquí
					</a>
				</p>
				<div className="text-center mx-0 my-0 mt-2">
					<a
						className="text-sm text-primary hover:underline"
						href={ROUTES_APP.RECOVERPASSWORD.path}
					>
						¿Olvidaste tu contraseña?
					</a>
				</div>
			</form>
		</>
	)
}
