'use client'
import type React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { PHONE_MAX, ROUTES_APP } from '@/shared/utils/constants'

export default function LoginPage() {
	const router = useRouter()
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		sessionStorage.setItem('phoneNumber', phoneNumber)
		setIsLoading(false)
		router.push(ROUTES_APP.VERIFICATION.path)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md shadow-lg rounded-lg">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold mt-4">
						Inicia sesión
					</CardTitle>
					<CardDescription>
						Ingresa tu número celular, recibirás un código de
						verificación por SMS.
					</CardDescription>
				</CardHeader>
				<CardContent>
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
								placeholder="(123) 456 7890"
								required
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="text-lg"
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
				</CardContent>
			</Card>
		</div>
	)
}
