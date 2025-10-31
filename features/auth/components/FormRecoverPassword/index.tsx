'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	PHONE_MAX,
	PHONE_PLACEHOLDER,
	ROUTES_APP,
} from '@/shared/utils/constants'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RiArrowLeftLine } from '@remixicon/react'
import FormRecoverPasswordSuccess from '@/features/auth/components/FormRecoverPasswordSucess'

export default function FormRecoverPassword() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log('[v0] Password recovery request for:', phone)
		setIsLoading(false)
		setIsSuccess(true)
	}

	if (isSuccess) {
		return <FormRecoverPasswordSuccess phone={phone} />
	}

	return (
		<Card className="w-full max-w-[400px] border-none shadow-none">
			<CardHeader className="space-y-4 pb-6">
				<h1 className="text-2xl font-bold">Recuperar contraseña</h1>
				<h2 className="text-muted-foreground text-sm leading-relaxed">
					Ingresa tu número de celular y te enviaremos un código de
					verificación por SMS.
				</h2>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div className="space-y-2">
						<Label htmlFor="phoneNumber">Número de celular</Label>
						<div className="relative">
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
					</div>

					<Button
						type="submit"
						className="w-full"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<svg
									className="animate-spin -ml-1 mr-2 h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
								Enviando enlace...
							</>
						) : (
							'Enviar enlace de recuperación'
						)}
					</Button>

					<div className="text-center pt-2">
						<Link
							href={ROUTES_APP.LOGIN.path}
							className="inline-flex items-center text-sm text-primary hover:underline"
						>
							<RiArrowLeftLine className="w-4 h-4 mr-1" />
							Volver a iniciar sesión
						</Link>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}

export { FormRecoverPassword }
