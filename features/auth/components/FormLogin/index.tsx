'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PHONE_MAX, ROUTES_APP } from '@/shared/utils/constants'
import { AuthLoginPost } from '@/features/auth/api/login'
import { FIELD_REQUIRED } from '@/shared/utils/constants'

export default function FormLogin() {
	const router = useRouter()
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		if(!phoneNumber) {
			alert(FIELD_REQUIRED)
			return
		}
		if(phoneNumber.length !== PHONE_MAX) {
			alert('El número celular debe tener 10 dígitos')
			return
		}

		try {
			const response = await AuthLoginPost(phoneNumber)
			if (response.status === 200) {
				sessionStorage.setItem('phoneNumber', phoneNumber)
				router.push(ROUTES_APP.VERIFICATION.path)
			}
		} catch (error) {
			console.error('Login error:', error)
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
						placeholder="(442) 233 5462"
						required
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
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
				<p className="text-center text-sm text-muted-foreground mx-0 my-0 mb-4">
					¿No tienes una cuenta?{' '}
					<a
						href={ROUTES_APP.REGISTER.path}
						className="text-primary hover:underline font-medium"
					>
						Regístrate aquí
					</a>
				</p>
			</form>
		</>
	)
}
